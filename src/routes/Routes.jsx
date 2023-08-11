import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsDetails from "../pages/News/NewsDetails/NewsDetails";
import NewsLayout from "../layout/NewsLayout";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/category/:id',
          element: <Category></Category>,
          loader: ({params}) => fetch(`http://localhost:3000/category/${params.id}`)
        }
      ]
    },
    {
      path: '/news',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: '/news/:id',
          element: <NewsDetails></NewsDetails>,
          loader : ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
        }
      ]
    }
  ]);

export default router;