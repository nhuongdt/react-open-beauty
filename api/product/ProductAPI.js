// import React, { useState } from 'react';

import axios from 'axios';
const baseURL = 'https://localhost:44311/api/services/app/NhomHangHoa/GetNhomDichVu';

export const GetDM_NhomHangHoa = async () => {
    // const [post, setPost] = useState(null);
    // const param = { IdNhomHangHoas: '', ParamSearch: { TextSearch: '', CurrentPage: 0, PageSize: 10, ColumnSort: '' } };
    var xx = await axios.get(`${baseURL}`).then((res) => {
        return res.data.result;
    });
    console.log(1, xx);
    return xx;
};
