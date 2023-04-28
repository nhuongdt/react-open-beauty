import './App.css';
import { useRoutes } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';
import LoginRoutes from './routes/LoginRoutes';

import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();
  const element = useRoutes([LoginRoutes, MainRoutes]);
  // return <div className="App"></div>;
  return element;
  // <RouterProvider router={router} />;
}

export default App;
