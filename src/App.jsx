import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login/Login';
import Error from './pages/Error/Error';
import User from './pages/User/User';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      children: [
        // {
        //   index: true,
        //   element: <Home />,
        // },
        {
          path: 'users',
          element: <User />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
