import requestUrlEncoded from "services/request.urlEncoded";
import { LOGIN, POST } from "constants/services/services.constants";
import RequestFailedException from "exceptions/RequestFailedException";

const loginApi = async (args) => {
    const endpoint = LOGIN;
    const method = POST;

    const response = await requestUrlEncoded({
        args, endpoint, method, authorized: false
    });

    const { status } = response;
    const result = await response.json();

    if (status !== 200) throw new RequestFailedException(status, result.message);
    return result;
}

export default loginApi;
