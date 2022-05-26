import requestUrlEncoded from 'services/request.urlEncoded';
import { STUDENT, PUT } from 'constants/services/services.constants';
import RequestFailedException from 'exceptions/RequestFailedException';

const updateStudentApi = async (args, id) => {
  const endpoint = `${STUDENT}/${id}`;
  const method = PUT;

  const response = await requestUrlEncoded({
    args, endpoint, method
  });

  const { status } = response;
  try {
    const result = await response.json();
  } catch (error) {
    const result = {};
    result.message = '';
  }

  if (status !== 200) throw new RequestFailedException(result.message, status);
};

export default updateStudentApi;
