// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Icon,
    IconButton,
    SvgIcon,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography,
    Divider
} from '@mui/material';
import { MenuOutlined, PlusOutlined, DownloadOutlined, ExportOutlined, TagOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { GetDM_NhomHangHoa } from 'api/product/GroupProductAPI';
import ModalNhomHangHoa from 'pages/products/ModalNhomHangHoa.js';

export const NhomHangHoas = (props = { dataNhomHang: [] }) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <>
            <List className="list-nhomhanghoa">
                {props.dataNhomHang.map((value) => (
                    <ListItem
                        key={value.id}
                        disableGutters
                        secondaryAction={
                            isHovering && (
                                <IconButton aria-label="comment">
                                    <PlusOutlined />
                                </IconButton>
                            )
                        }>
                        <ListItemAvatar style={{ minWidth: '40px' }}>
                            <TagOutlined />
                        </ListItemAvatar>
                        <ListItemText primary={`${value.tenNhomHang}`} />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default function PageProduct() {
    const [showModal, setShowModal] = useState(false);
    const [lstProductGroup, setLstProductGroup] = useState([]);
    useEffect(() => {
        GetDM_NhomHangHoa().then((data) => {
            let obj = {
                id: null,
                maNhomHang: '',
                tenNhomHang: 'Tất cả',
                laNhomhangHoa: false
            };
            data.items.unshift(obj);
            setLstProductGroup(data.items);
        });
    }, []);

    function showModalNhomHang() {
        setShowModal(true);
    }
    function hideModalNhomHang() {
        setShowModal(false);
    }
    function saveNhomHangOK(objNew) {
        setShowModal(false);
        setLstProductGroup((oldArr) => {
            let copy = [...oldArr];
            copy.splice(1, 0, objNew);
            return copy;
        });
    }

    return (
        <>
            <ModalNhomHangHoa
                dataNhomHang={lstProductGroup}
                show={showModal}
                handleClose={hideModalNhomHang}
                handleSave={saveNhomHangOK}></ModalNhomHangHoa>
            <Grid container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={12} sm={6} md={8} lg={8} sx={{ height: 60 }} rowSpacing={2}>
                    <Typography variant="h4">Danh mục hàng hóa</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} pr={2} rowSpacing={2} style={{ backgroundColor: 'white', height: 60 }}>
                    <Box display="flex" justifyContent="flex-end">
                        <Box component="span" sx={{ height: 40, with: 40, p: 1.5, mr: 1 }}>
                            <MenuOutlined />
                        </Box>
                        <Button variant="contained" color="error" sx={{ bgcolor: '#7C3367' }} startIcon={<PlusOutlined />}>
                            Thêm mới
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={0} sm={3} md={3} lg={3}>
                    <Grid container>
                        <Grid item xs={8} sm={8} md={8} lg={8}>
                            <Typography variant="h5">Nhóm dịch vụ</Typography>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ pr: 2 }} display="flex" justifyContent="flex-end">
                            <PlusOutlined onClick={showModalNhomHang} />
                        </Grid>
                    </Grid>
                    <Divider sx={{ mr: 2, mf: 0, p: 0.5, borderColor: '#cccc' }} />
                    <NhomHangHoas dataNhomHang={lstProductGroup} />
                </Grid>
                <Grid item xs={12} sm={9} md={9} lg={9} style={{ backgroundColor: 'yellow' }}>
                    <Grid container rowSpacing={1}>
                        <Grid item xs={12} sm={6} md={6} lg={6} style={{ backgroundColor: '#FAEBD7' }}>
                            <TextField style={{ width: 400 }}>tim kiem</TextField>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} pr={2} style={{ backgroundColor: '#E9967A' }}>
                            <Box display="flex" justifyContent="flex-end">
                                <Button variant="contained" style={{ marginRight: 8 }} startIcon={<DownloadOutlined />}>
                                    Nhập
                                </Button>
                                <Button variant="contained" color="error" startIcon={<ExportOutlined />}>
                                    Xuất
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} style={{ backgroundColor: '#EE82EE' }}>
                            <span> Danh sach san pham</span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
