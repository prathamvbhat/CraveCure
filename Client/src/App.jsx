import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';
import Notfound from './pages/Notfound';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs'
import Layout from './pages/Layout';
import Community from './pages/Community';
import StationaryDonation from './pages/Donation/Stationary';
import ClothDonation from './pages/Donation/Cloth';
import FoodDonation from './pages/Donation/Food';

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
      element: (
        <ProtectedRoute>
        <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/dashboard",
          element:<Dashboard />
        },
        {
          path: "/aboutus",
          element:<AboutUs/>
        },
        {
          path: "/community",
          element: <Community />
        },{
          path: "/foodDonation",
          element: <FoodDonation />
        },
        {
          path: "/clothDonation",
          element: <ClothDonation />
        },
        {
          path: "/stationaryDonation",
          element: <StationaryDonation />
        }
      ]
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