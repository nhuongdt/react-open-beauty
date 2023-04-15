import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { useEffect, useState } from 'react';
import { Grid, Box, Autocomplete, InputAdornment } from '@mui/material';
import { TextField, Typography } from '../../../node_modules/@mui/material/index';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InsertNhomHangHoa } from 'api/product/GroupProductAPI';
import 'assets/css/app-style.css';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { GuidEmpty, strToEnglish, getFirstLetter } from 'utils/common';

function PaperComponent(props) {
    return (
        <>
            <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
                <Paper {...props} />
            </Draggable>
        </>
    );
}

class nhomHangHoaDto {
    constructor(id = '00000000-0000-0000-0000-000000000000', maNhomHangHoa = '', tenNhomHangHoa = '', laNhomHangHoa = '') {
        this.id = id;
        this.maNhomHang = maNhomHangHoa;
        this.tenNhomHang = tenNhomHangHoa;
        this.tenNhomHang_KhongDau = strToEnglish(tenNhomHangHoa);
        this.laNhomHangHoa = laNhomHangHoa;
        this.moTa = '';
    }
}

export const GridColor = ({ handleChoseColor }) => {
    const [itemColor, setItemColor] = useState({});
    function choseColor(color) {
        setItemColor(color);
        console.log('itemColor ', itemColor == '#D2691E');

        handleChoseColor(color);
    }
    return (
        <>
            <Box
                style={{
                    width: 280,
                    height: 150,
                    position: 'absolute',
                    zIndex: 1,
                    backgroundColor: '#FFFFF0',
                    borderRadius: 4
                }}
                sx={{ ml: 0, p: 1.5, border: '1px solid grey' }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 6 }}>
                    <Grid item xs={1} sm={1} md={1} onClick={() => choseColor('#D2691E')}>
                        <Box
                            className="grid-color"
                            sx={{ bgcolor: '#D2691E' }}
                            style={{ boder: itemColor == '#D2691E' ? '4px solid black' : 0 }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} onClick={() => choseColor('#DC143C')}>
                        <Box className="grid-color" sx={{ bgcolor: '#DC143C' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} onClick={() => choseColor('#00008B')}>
                        <Box className="grid-color" sx={{ bgcolor: '#00008B' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} onClick={() => choseColor('#8B008B')}>
                        <Box className="grid-color" sx={{ bgcolor: '#8B008B' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} onClick={() => choseColor('#696969')}>
                        <Box className="grid-color" sx={{ bgcolor: '#696969' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} onClick={() => choseColor('#B22222')}>
                        <Box className="grid-color" sx={{ bgcolor: '#B22222' }}></Box>
                    </Grid>

                    <Grid item xs={1} sm={1} md={1} onClick={() => choseColor('#2F4F4F')}>
                        <Box className="grid-color" sx={{ bgcolor: '#2F4F4F' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} onClick={() => choseColor('#00FF7F')}>
                        <Box className="grid-color" sx={{ bgcolor: '#00FF7F' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} onClick={() => choseColor('#FFFF00')}>
                        <Box className="grid-color" sx={{ bgcolor: '#FFFF00' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} onClick={() => choseColor('#B22222')}>
                        <Box className="grid-color" sx={{ bgcolor: '#8B008B' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} onClick={() => choseColor('#B22222')}>
                        <Box className="grid-color" sx={{ bgcolor: '#696969' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} onClick={() => choseColor('#B22222')}>
                        <Box className="grid-color" sx={{ bgcolor: '#B22222' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} onClick={() => choseColor('#B22222')}>
                        <Box className="grid-color" sx={{ bgcolor: '#D2691E' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} onClick={() => choseColor('#B22222')}>
                        <Box className="grid-color" sx={{ bgcolor: '#DC143C' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        <Box className="grid-color" sx={{ bgcolor: '#00008B' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        <Box className="grid-color" sx={{ bgcolor: '#8B008B' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        <Box className="grid-color" sx={{ bgcolor: '#696969' }}></Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        <Box className="grid-color" sx={{ bgcolor: '#B22222' }}></Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default function ModalNhomHangHoa({ dataNhomHang, handleSave, handleClose, show = false, isNew }) {
    const [objNhomHang, setObjNhomHang] = React.useState({
        id: GuidEmpty,
        maNhomHang: '',
        tenNhomHang: '',
        idParent: null,
        laNhomHangHoa: '',
        moTa: ''
    });
    const arrColor = [
        { id: 1, color: '#D2691E' },
        { id: 1, color: '#DC143C' },
        { id: 1, color: '#00008B' },
        { id: 1, color: '#8B008B' },
        { id: 1, color: '#8B0000' },
        { id: 1, color: '#DC143C' },
        { id: 1, color: '#B22222' },
        { id: 1, color: '#696969' },
        { id: 1, color: '#D2691E' },
        { id: 1, color: '#008000' },
        { id: 1, color: '#D2691E' },
        { id: 1, color: '#DC143C' }
    ];

    const [maNhomHangHoa, setMaNhomHangHoa] = useState('');
    const [tenNhomHangHoa, setTenNhomHangHoa] = useState('');
    const [idParent, setIdParent] = useState('');
    const [moTa, setMoTa] = useState('');
    const [color, setColor] = useState('#D2691E');

    const [colorToggle, setColorToggle] = useState(false);

    function changeColor(colorNew) {
        setColor(colorNew);
        setColorToggle(false);
    }

    const saveNhomHangHoa = () => {
        // setObjNhomHang((prev) => ({ ...prev, tenNhomHang: tenNhomHangHoa }));//?? not work?? why
        const objNew = new nhomHangHoaDto();
        objNew.maNhomHang = getFirstLetter(tenNhomHangHoa);
        objNew.tenNhomHang = tenNhomHangHoa;
        objNew.tenNhomHang_KhongDau = strToEnglish(tenNhomHangHoa);
        objNew.moTa = moTa;
        objNew.idParent = idParent;
        objNew.color = color;
        objNew.laNhomHangHoa = false;
        console.log('objNew ', objNew);

        InsertNhomHangHoa(objNew).then((data) => {
            setObjNhomHang(data);
            handleSave(data);
        });
    };

    return (
        <div>
            <Dialog open={show} onClose={handleClose} aria-labelledby="draggable-dialog-title" fullWidth>
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" className="modal-title">
                    Thêm nhóm dịch vụ
                </DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ pb: 2 }}>
                            <Box sx={{ height: 30 }}>
                                <span>Tên nhóm dịch vụ</span>
                                &nbsp;&nbsp;<span sx={{ color: 'red' }}>*</span>
                            </Box>

                            <TextField
                                variant="outlined"
                                fullWidth
                                required
                                value={tenNhomHangHoa}
                                onChange={(event) => setTenNhomHangHoa(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ pb: 2 }}>
                            <Box sx={{ height: 30 }}>
                                <span>Nhóm gốc</span>
                            </Box>

                            <Autocomplete
                                fullWidth
                                disablePortal
                                options={dataNhomHang}
                                onChange={(event, item) => {
                                    setIdParent(item.id);
                                }}
                                getOptionLabel={(option) => (option.tenNhomHang ? option.tenNhomHang : '')}
                                renderInput={(params) => <TextField {...params} label="Chọn nhóm" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ pb: 2 }}>
                            <Box sx={{ height: 30 }}>
                                <span>Màu sắc</span>
                            </Box>
                            <TextField
                                onClick={() => setColorToggle(!colorToggle)}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Box className="grid-color" sx={{ bgcolor: color }}></Box>
                                        </InputAdornment>
                                    )
                                }}
                                variant="outlined"
                            />
                            {colorToggle && <GridColor handleChoseColor={changeColor} />}
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ pb: 2 }}>
                            <Box sx={{ height: 30 }}>
                                <span>Mô tả</span>
                            </Box>

                            <TextField
                                variant="outlined"
                                fullWidth
                                multiline
                                value={moTa}
                                onChange={(event) => setMoTa(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions sx={{ paddingRight: 2.5 }}>
                    <Button variant="contained" sx={{ bgcolor: '#7C3367' }} onClick={saveNhomHangHoa}>
                        Lưu
                    </Button>
                    <Button variant="outlined" sx={{ borderColor: '#7C3367' }} onClick={handleClose}>
                        Hủy
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
