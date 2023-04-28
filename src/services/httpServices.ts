import axios from 'axios';
import qs from 'qs';

const http = axios.create({
  baseURL: process.env.REACT_APP_REMOTE_SERVICE_BASE_URL,
  timeout: 30000,
  headers: {
    // 'Abp.TenantId': tenantId === '1' ? '' : tenantId,
    'Content-Type': 'application/json'
  },
  paramsSerializer: function (params) {
    return qs.stringify(params, {
      encode: false
    });
  }
});

export default http;
