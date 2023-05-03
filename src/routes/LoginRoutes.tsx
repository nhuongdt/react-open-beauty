import { lazy } from 'react';

const AuthLogin = lazy(() => import('../pages/login/Login'));
const MinimalLayout = lazy(() => import('../pages/layout/MinimalLayout'));

const LoginRoutes = {
  path: '/login',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <AuthLogin />
    },
    {
      path: 'register',
      element: <AuthLogin />
    }
  ]
};
export default LoginRoutes;
