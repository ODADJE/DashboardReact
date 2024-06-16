import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
