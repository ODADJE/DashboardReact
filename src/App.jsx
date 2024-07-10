import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemeProvider from './contexts/ThemeProvider';
import Login from './pages/Auth/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Error from './pages/Error/Error';
import User from './pages/User/User';
import FeedbackProvider from './contexts/FeedbackContext';
import { Toaster } from 'sonner';

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
        {
          path: 'users',
          element: <User />,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider>
      <FeedbackProvider>
        <Toaster position="bottom-right" richColors />
        <RouterProvider router={router} />
      </FeedbackProvider>
    </ThemeProvider>
  );
}

export default App;
