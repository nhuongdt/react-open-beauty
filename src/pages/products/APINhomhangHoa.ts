import axios from 'axios';
import { GuidEmpty, strToEnglish, checkNull } from '../public/common';

export class ModelNhomHangHoa {
  id?: string = GuidEmpty;
  maNhomHang = '';
  tenNhomHang = '';
  tenNhomHang_KhongDau = '';
  moTa = '';
  idParent: string | null = null;
  color = '';
  laNhomHangHoa = true;

  constructor(id: string = GuidEmpty, maNhomHang = '', tenNhomHang = '', laNhomHangHoa = true) {
    this.id = id;
    this.maNhomHang = maNhomHang;
    this.tenNhomHang = tenNhomHang;
    this.laNhomHangHoa = laNhomHangHoa;
  }
}

export const GetNhomHangHoa_byID = async (id: string) => {
  const xx = await axios
    .get(`${process.env.REACT_APP_URL_BASE}NhomHangHoa/GetNhomHangHoa_byID?id=${id}`)
    .then((res: { data: { result: any } }) => {
      return res.data.result;
    });
  console.log('GetNhomHangHoa_byID ', xx);
  return xx;
};

export const GetDM_NhomHangHoa = async () => {
  const xx = await axios
    .get(`${process.env.REACT_APP_URL_BASE}NhomHangHoa/GetNhomDichVu`)
    .then((res: { data: { result: any } }) => {
      return res.data.result;
    });
  console.log('GetDM_NhomHangHoa ', process.env.REACT_APP_URL_BASE);
  return xx;
};

export const InsertNhomHangHoa = async (param: any) => {
  const xx = await axios
    .post(`${process.env.REACT_APP_URL_BASE}NhomHangHoa/CreateNhomHangHoa`, param)
    .then((res) => {
      return res.data.result;
    });
  return xx;
};
