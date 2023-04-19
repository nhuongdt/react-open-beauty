// import React, { useState } from 'react';

import axios from 'axios';
import { GuidEmpty } from '../public/common';

export class ModelHangHoaDto {
  id?: string = GuidEmpty;
  tenHangHoa?: string = '';
  tenHangHoa_KhongDau?: string = '';
  idNhomHangHoa?: string | null;
  idLoaiHangHoa?: number = 2;
  soPhutThucHien?: number | string = '0';
  moTa?: string = '';
  trangThai?: number = 1;
  tenNhomHang?: string = '';
  tenLoaiHangHoa?: string = 'Dịch vụ';
  txtTrangThaiHang?: string = 'Đang kinh doanh';

  idDonViQuyDoi?: string;
  tenDonViTinh?: string;
  maHangHoa?: string;
  giaBan?: string | number;
  tyLeChuyenDoi?: number;
  laDonViTinhChuan?: number;
  idHangHoa?: string;

  donViQuiDois:
    | any[]
    | {
        id: string;
        maHangHoa: string;
        tenDonViTinh: string;
        tyLeChuyenDoi: number;
        giaBan: string | number;
        laDonViTinhChuan: number;
      }[];

  constructor(
    id = GuidEmpty,
    tenHangHoa = '',
    idNhomHangHoa = '',
    moTa = '',
    donViQuiDois: any = []
  ) {
    this.id = id;
    this.tenHangHoa = tenHangHoa;
    this.idNhomHangHoa = idNhomHangHoa;
    this.moTa = moTa;
    this.donViQuiDois = donViQuiDois;
  }
}

export const GetDetailHangHoa = async (id: any) => {
  const xx = await axios
    .post(`${process.env.REACT_APP_URL_BASE}HangHoa/getDetail?id=${id}`)
    .then((res: { data: { result: any } }) => {
      return res.data.result;
    });
  console.log('GetDMHangHoa', xx);
  return xx;
};

export const Get_DMHangHoa = async (input: {
  idNhomHangHoas: any;
  paramSearch: {
    textSearch: string;
    currentPage: number;
    pageSize: number;
    columnSort: string;
    typeSort: string;
  };
}) => {
  const xx = await axios
    .post(`${process.env.REACT_APP_URL_BASE}HangHoa/GetDMHangHoa`, input)
    .then((res: { data: { result: any } }) => {
      return res.data.result;
    });
  console.log('GetDMHangHoa', xx);
  return xx;
};

export const CreateOrEdit = async (input: ModelHangHoaDto) => {
  const xx = await axios
    .post(`${process.env.REACT_APP_URL_BASE}HangHoa/CreateOrEdit`, input)
    .then((res: { data: { result: any } }) => {
      return res.data.result;
    });
  console.log('CreateOrEdit', xx);
  return xx;
};
