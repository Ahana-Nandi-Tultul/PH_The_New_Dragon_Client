import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsDetails from "../pages/News/NewsDetails/NewsDetails";
import NewsLayout from "../layout/NewsLayout";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: '/',
    element:<LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to="/category/0"></Navigate>

      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
    {
      path: 'category',
      element: <Main></Main>,
      children:[
        {
            path: 'category/0',
            element: <Category></Category>,
            loader : () => fetch(`https://ph-the-news-dragon-server.vercel.app/news`)
        },
        {
          path: ':id',
          element: <Category></Category>,
          loader: ({params}) => fetch(`https://ph-the-news-dragon-server.vercel.app/category/${params.id}`)
        }
      ]
    },
    {
      path: '/news',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
          loader : ({params}) => fetch(`https://ph-the-news-dragon-server.vercel.app/news/${params.id}`)
        }
      ]
    }
  ]);

export default router;