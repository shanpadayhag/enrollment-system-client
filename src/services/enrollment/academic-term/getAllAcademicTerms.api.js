import requestUrlEncoded from "services/request.urlEncoded";
import { ACADEMIC_TERM, GET } from "constants/services/services.constants";
import RequestFailedException from "exceptions/RequestFailedException";

const getAllAcademicTermsApi = async (id) => {
  const endpoint = ACADEMIC_TERM;
  const method = GET;

  const response = await requestUrlEncoded({
    args: {}, endpoint, method
  });

  const { status } = response;
  const result = await response.json();

  if (status !== 200) throw new RequestFailedException(status, result.message);
  return result;
}

export default getAllAcademicTermsApi;
