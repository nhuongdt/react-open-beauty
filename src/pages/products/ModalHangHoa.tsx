import * as React from 'react';
import { useEffect, useState, useImperativeHandle, forwardRef, useRef } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
  Button,
  Box,
  TextField,
  Autocomplete,
  Card,
  Link
} from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

import '../../App.css';
import { GuidEmpty, strToEnglish, checkNull } from '../public/common';
import { CreateOrEdit, ModelHangHoaDto } from './APIHangHoa';
import { ModelNhomHangHoa } from './APINhomhangHoa';

// const customTheme = createMuiTheme({
//   overrides: {
//     MuiInput: {
//       input: {
//         "&::placeholder": {
//           color: "gray"
//         },
//         color: "white", // if you also want to change the color of the input, this is the prop you'd use
//       }
//     }
//   });

export function ModalHangHoa({ dataNhomHang, handleClose, handleSave, show, isNew }: any) {
  // const [showModal, setShowModal] = useState(false);
  const [objNhom, setObjNhomHang] = useState<ModelNhomHangHoa | null>(null);

  const [tenHangHoa, setTenHangHoa] = useState('');
  const [idNhomHangHoa, setIdNhomHangHoa] = useState(null);
  const [tenNhomHang, setTenNhomHang] = useState(null);
  const [idLoaiHangHoa, setIdLoaiHangHoa] = useState(2);
  const [soPhutThucHien, setSoPhutThucHien] = useState('');
  const [moTa, setMoTa] = useState('');

  const [maHangHoa, setMaHangHoa] = useState('');
  const [tenDonViTinh, setTenDonViTinh] = useState('');
  const [tyLeChuyenDoi, setTyLeChuyenDoi] = useState(1);
  const [giaBan, setGiaBan] = useState('');
  const [laDonViTinhChuan, setLaDonViTinhChuan] = useState(1);

  function choseNhomHang(item: any) {
    setIdNhomHangHoa(item.id);
    setTenNhomHang(item.tenNhomHang);
    console.log('idnhom ', item);
  }

  function CheckSave() {
    if (checkNull(tenHangHoa)) {
      return 'Vui lòng nhập tên hàng hóa';
    }
    return '';
  }

  async function saveProduct() {
    handleClose();

    const objNew = new ModelHangHoaDto();
    objNew.id = GuidEmpty;
    objNew.tenHangHoa = tenHangHoa;
    objNew.tenHangHoa_KhongDau = strToEnglish(tenHangHoa);
    objNew.idNhomHangHoa = null;
    objNew.idLoaiHangHoa = idLoaiHangHoa;
    objNew.soPhutThucHien = checkNull(soPhutThucHien) ? 0 : soPhutThucHien;
    objNew.moTa = moTa;
    objNew.trangThai = 1;

    objNew.tenNhomHang = tenNhomHang ?? '';
    objNew.tenLoaiHangHoa = idLoaiHangHoa == 1 ? 'Hàng hóa' : 'Dịch vụ';
    objNew.txtTrangThaiHang = objNew.trangThai == 1 ? 'Đang kinh doanh' : 'Ngừng kinh doanh';

    objNew.donViQuiDois = [
      {
        id: GuidEmpty,
        maHangHoa: maHangHoa,
        tenDonViTinh: tenDonViTinh,
        tyLeChuyenDoi: tyLeChuyenDoi,
        giaBan: checkNull(giaBan) ? 0 : giaBan,
        laDonViTinhChuan: laDonViTinhChuan
      }
    ];

    const data = await CreateOrEdit(objNew);
    objNew.id = data.id;
    objNew.donViQuiDois = [...data.donViQuiDois];
    handleSave(objNew);
  }
  return (
    <>
      <Dialog open={show} onClose={() => handleClose()} fullWidth maxWidth="md">
        <DialogTitle> {isNew ? 'Thêm' : 'Cập nhật'} dịch vụ</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12} md={8} sm={8} lg={8}>
              <Box sx={{ height: 50 }}>
                <Typography>Thông tin chi tiết</Typography>
              </Box>
              <Grid item sx={{ pb: 2 }}>
                <Box sx={{ height: 30 }}>
                  <span>Mã dịch vụ</span>
                </Box>
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  style={{ fontSize: 10 }}
                  placeholder="Mã tự động"
                  value={maHangHoa}
                  onChange={(event) => setMaHangHoa(event.target.value)}
                />
              </Grid>
              <Grid item sx={{ pb: 2 }}>
                <Box sx={{ height: 30 }}>
                  <span>Tên dịch vụ</span>
                  &nbsp;&nbsp;<span>*</span>
                </Box>
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  value={tenHangHoa}
                  onChange={(event) => setTenHangHoa(event.target.value)}
                />
              </Grid>
              <Grid item sx={{ pb: 2 }}>
                <Box sx={{ height: 30 }}>
                  <span>Nhóm dịch vụ</span>
                </Box>

                <Autocomplete
                  fullWidth
                  disablePortal
                  value={idNhomHangHoa}
                  options={dataNhomHang.filter((x: ModelNhomHangHoa) => x.id != null)}
                  // onChange={(event: any, obj: any) => {
                  //   setIdNhomHangHoa(obj.id);
                  // }}
                  inputValue={tenNhomHang ?? ''}
                  onInputChange={(event: any, newInputValue: any) => {
                    setTenNhomHang(newInputValue);
                  }}
                  getOptionLabel={(option: ModelNhomHangHoa) =>
                    option.tenNhomHang ? option.tenNhomHang : ''
                  }
                  renderInput={(params) => <TextField {...params} label="Chọn nhóm" />}
                />
              </Grid>
              <Grid container sx={{ pb: 2 }}>
                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ pr: 4 }}>
                  <Box sx={{ height: 30 }}>
                    <Typography>Giá</Typography>
                  </Box>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="0"
                    value={giaBan}
                    onChange={(event) => setGiaBan(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ PluginArray: 4 }}>
                  <Box sx={{ height: 30 }}>
                    <Typography>Số phút</Typography>
                  </Box>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="0"
                    value={soPhutThucHien}
                    onChange={(event) => setSoPhutThucHien(event.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid item sx={{ pb: 2 }}>
                <Box sx={{ height: 30 }}>
                  <span>Ghi chú</span>
                </Box>
                <TextField
                  variant="outlined"
                  fullWidth
                  multiline
                  rows="2"
                  value={moTa}
                  onChange={(event) => setMoTa(event.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} sm={4} lg={4}>
              <Box
                display="grid"
                sx={{ border: '2px dashed #cccc', p: 5, ml: 4 }}
                className="text-center">
                <InsertDriveFileIcon className="icon-size" />
                <Box sx={{ pt: 2 }}>
                  <CloudDoneIcon style={{ paddingRight: '5px', color: '#7C3367' }} />
                  <Link href="#" underline="always">
                    Tải ảnh lên
                  </Link>
                </Box>
                <Typography variant="caption">File định dạng jpeg, png</Typography>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" sx={{ bgcolor: '#7C3367' }} onClick={saveProduct}>
            Lưu
          </Button>
          <Button variant="outlined" sx={{ borderColor: '#7C3367' }} onClick={() => handleClose()}>
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
