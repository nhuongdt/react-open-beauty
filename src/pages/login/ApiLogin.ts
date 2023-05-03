import { DtoLogin } from './DtoLogin';
import http from '../../services/httpServices';
import Cookies from 'js-cookie';

class ApiLogin {
  CheckTenant = async (tenantName: string) => {
    if (tenantName == null || tenantName === '') {
      tenantName = 'default';
    }
    const result = await http.post('api/services/app/Account/IsTenantAvailable', {
      tenancyName: tenantName
    });
    let tenantId = result.data.result['tenantId'];
    if (tenantId == null) {
      tenantId = 0;
    }
    Cookies.set('TenantId', tenantId);
    return result.data.result;
  };
  Login = async (input: DtoLogin) => {
    const tenantId = '1'; //  const tenantId = Cookies.get('TenantId');
    const result = await http.post('/api/TokenAuth/Authenticate', input, {
      headers: {
        'Abp.TenantId': tenantId === '1' ? '' : tenantId,
        'Content-Type': 'application/json'
      }
    });
    if (result.status === 200) {
      console.log('Authenticate', result.data);
      Cookies.set('accessToken', result.data.result['accessToken']);
      Cookies.set('encryptedAccessToken', result.data.result['encryptedAccessToken']);
      Cookies.set('expireInSeconds', result.data.result['expireInSeconds']);
      return true;
    }
    return false;
  };
}

export default new ApiLogin();
