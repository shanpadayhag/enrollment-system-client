import { GET, WEB_SERVICE_API_URL } from 'constants/services/services.constants';

const requestUrlEncoded = async ({
    args,
    endpoint,
    method,
    authorized = true
}) => {
    const token = _retrieveToken();
    const headers = _generateRequestHeaders({authorized, token});
    const body = _encodeParameters(args);
    const completeUrl = _createCompleteUrl({endpoint, method, body});

    return fetch(completeUrl, {
        method: method,
        body: method !== GET ? body : undefined,
        headers: headers,
    });
}

const _retrieveToken = () => localStorage.getItem('accessToken') || '';

const _generateRequestHeaders = ({authorized, token}) => {
    const tokenIncluded = authorized && !!token;
    const headers = {}

    headers['Content-type'] = 'application/x-www-form-urlencoded';
    headers['Accept'] = 'application/json';

    if (tokenIncluded) {
        headers['Authorization'] = `Bearer ${token}`
    }

    return headers;
}

const _encodeParameters = (args) => {
    return Object.keys(args)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(args[key])}`)
        .join('&');
}

const _createCompleteUrl = ({ endpoint, method, body }) => {
    const queryParameters = method === GET ? `?${body}` : '';

    return `${WEB_SERVICE_API_URL}${endpoint}${queryParameters}`;
};

export default requestUrlEncoded;