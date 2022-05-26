import requestUrlEncoded from 'services/request.urlEncoded';
import { SIGNUP, POST } from 'constants/services/services.constants';
import RequestFailedException from 'exceptions/RequestFailedException';

const signupApi = async (args) => {
  const endpoint = SIGNUP;
  const method = POST;

  const response = await requestUrlEncoded({
    args, endpoint, method, authorized: false
  });

  const { status } = response;
  const result = await response.json();

  if (status !== 201) throw new RequestFailedException(result.message, status);
  return result;
};

export default signupApi;
