import requestUrlEncoded from "services/request.urlEncoded";
import { ENROLLED_STUDENT_CREATE_FORM, GET } from "constants/services/services.constants";
import RequestFailedException from "exceptions/RequestFailedException";

const getFormEnrollStudentApi = async (args) => {
  const endpoint = ENROLLED_STUDENT_CREATE_FORM;
  const method = GET;

  const response = await requestUrlEncoded({
    args, endpoint, method
  });

  const { status } = response;
  const result = await response.json();

  if (status !== 200) throw new RequestFailedException(status, result.message);
  return result;
}

export default getFormEnrollStudentApi;
