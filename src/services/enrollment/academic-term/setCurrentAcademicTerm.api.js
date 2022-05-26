import requestUrlEncoded from "services/request.urlEncoded";
import { SET_CURRENT_ACADEMIC_TERM, GET } from "constants/services/services.constants";
import RequestFailedException from "exceptions/RequestFailedException";

const getEnrolledStudentsApi = async (id) => {
  const endpoint = `${SET_CURRENT_ACADEMIC_TERM}/${id}`;
  const method = GET;

  const response = await requestUrlEncoded({
    args: {}, endpoint, method
  });

  const { status } = response;

  if (status !== 200) throw new RequestFailedException(status, result.message);
}

export default getEnrolledStudentsApi;
