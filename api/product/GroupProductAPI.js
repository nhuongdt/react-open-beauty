import axios from 'axios';
import { client } from 'api/api';
// const baseURL = 'https://localhost:44311/api/services/app/';

export const GetDM_NhomHangHoa = async () => {
    var xx = await client.get(`${process.env.REACT_APP_URL_BASE}NhomHangHoa/GetNhomDichVu`).then((res) => {
        return res.data.result;
    });
    console.log('GetDM_NhomHangHoa ', process.env.REACT_APP_URL_BASE);
    return xx;
};

export const InsertNhomHangHoa = async (param) => {
    var xx = await axios.post(`${process.env.REACT_APP_URL_BASE}NhomHangHoa/CreateNhomHangHoa`, param).then((res) => {
        return res.data.result;
    });
    return xx;
};
