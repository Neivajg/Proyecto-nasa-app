import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import ErrorPage from '../error-page'
import Home from '../components/Home'
import Landing from '../components/Landing'
import Neas from '../components/Neas'


const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index:true,
          element: <Home/>,
          errorElement: <ErrorPage />,
        },
        {
          path: "/landing",
          element: <Landing/>,
          errorElement: <ErrorPage />,
        },
        {
          path: "/neas",
          element: <Neas/>,
          errorElement: <ErrorPage />,
        },
    
      ]
    },
  

]);

export default router;