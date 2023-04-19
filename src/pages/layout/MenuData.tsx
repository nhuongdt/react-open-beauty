import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const menuData = [
  {
    id: 0,
    path: '/',
    name: 'Trang chủ',
    icon: <HomeIcon />,
    children: [
      {
        path: '/dashboard/workplace',
        name: 'workplace',
        icon: ''
      }
    ]
  },
  {
    id: 1,
    path: '/appointement',
    name: 'Lịch hẹn',
    icon: <CalendarMonthIcon />
  },
  {
    id: 2,
    path: '/product',
    name: 'Dịch vụ',
    icon: <FormatListBulletedIcon />
  },
  {
    id: 3,
    path: '/customer',
    name: 'Khách hàng',
    icon: <AccountCircleIcon />
  },
  {
    id: 4,
    path: '/staff',
    name: 'Nhân viên',
    icon: <SupervisedUserCircleIcon />
  }
];
