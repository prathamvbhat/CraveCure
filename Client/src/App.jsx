import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';
import  Notfound from './pages/Notfound';
import React from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to='/signin' replace />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path:'/signin',
      element:<Login/>
    },
    {
      path:'/notfound',
      element:<Notfound/>
    },
    {
      path: "*",
      element: <Navigate to="/notfound" replace />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <ProtectedRoute>
          <AboutUs/>
        </ProtectedRoute>
      ),
    },
    {
      future: {
        v7_startTransition: true,
      }
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App