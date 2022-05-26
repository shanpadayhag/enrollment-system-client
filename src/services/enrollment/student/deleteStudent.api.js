import requestUrlEncoded from 'services/request.urlEncoded';
import { STUDENT, DELETE } from 'constants/services/services.constants';
import RequestFailedException from 'exceptions/RequestFailedException';

const deleteStudentApi = async (id) => {
  const endpoint = `${STUDENT}/${id}`;
  const method = DELETE;

  const response = await requestUrlEncoded({
    args: {}, endpoint, method
  });

  const { status } = response;
  let result = {};

  try {
    result = await response.json();
  } catch (error) {
    result.message = '';
  }

  if (status !== 200) throw new RequestFailedException(result.message, status);
};

export default deleteStudentApi;
