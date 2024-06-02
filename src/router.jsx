import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import NotFound from './pages/Error/NotFound';
import Housing from './pages/Homepage/pages/Housing/Housing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/housing/:id',
        element: <Housing />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
