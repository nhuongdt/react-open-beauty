import { Outlet } from 'react-router-dom';
import Sliderbar from './Sliderbar';

const Layout = () => {
  return (
    <>
      <Sliderbar />
      <Outlet />
    </>
  );
};

export default Layout;
