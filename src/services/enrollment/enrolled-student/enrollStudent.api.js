import requestUrlEncoded from "services/request.urlEncoded";
import { ENROLLED_STUDENT, POST } from "constants/services/services.constants";
import RequestFailedException from "exceptions/RequestFailedException";

const enrollStudentApi = async (args) => {
  const endpoint = ENROLLED_STUDENT;
  const method = POST;

  const response = await requestUrlEncoded({
    args, endpoint, method
  });

  const { status } = response;
  const result = await response.json();
  const failed = status !== 201 && status !== 200;

  if (failed) throw new RequestFailedException(status, result.message);
  return result;
}

export default enrollStudentApi;
