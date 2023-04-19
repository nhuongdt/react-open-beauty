import './App.css';
import { useRoutes } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <div>
//         <h1>Hello World</h1>
//       </div>
//     )
//   },
//   {
//     path: 'about',
//     element: <div>About</div>
//   }
// ]);

function App() {
  const element = useRoutes([MainRoutes]);
  // return <div className="App"></div>;
  return element;
  // <RouterProvider router={router} />;
}

export default App;
