import { DtoLogin } from './DtoLogin';
import http from '../../services/httpServices';
// import Cookies from 'js-cookie';

class ApiLogin {
  Login = async (input: DtoLogin) => {
    const data = await http.post('/api/TokenAuth/Authenticate', input);
    if (data.status === 200) {
      console.log('ok');
      return data;
    }
  };
}

export default new ApiLogin();
