import React from 'react';
import { lazy } from 'react';
const DashBoard = lazy(() => import('../pages/dashboard/dashboard'));
const PageProduct = lazy(() => import('../pages/products/PageProduct'));
// import Layout from '../pages/layout/Layout';
const Layout = lazy(() => import('../pages/layout/Layout'));
const Sliderbar = lazy(() => import('../pages/layout/Sliderbar'));

const MainRoutes = {
  element: <Sliderbar />,
  children: [
    { path: '/product', element: <PageProduct /> },
    { path: 'product', element: <PageProduct /> }
  ]
};
export default MainRoutes;
