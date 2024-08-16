import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import SingleBlog from "./pages/Single Blog/SingleBlog.jsx";
import SingleProduct from "./pages/Single Product/SingleProduct.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Products from "./pages/Products/Products.jsx";
import QA from "./pages/QA/QA.jsx";
import NotFound from "./pages/Not Found/NotFound.jsx";
import Account from "./pages/Account/Account.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Basket from "./pages/Basket/Basket.jsx";
import PrivateRoute from "./components/private-route/PrivateRoute.jsx";
import { Navigate } from "react-router-dom";
const isLoggedIn = localStorage.getItem("Token");

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  { path: "/products", element: <Products /> },
  { path: "/product/:productUrl", element: <SingleProduct /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/blog/:blogUrl", element: <SingleBlog /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/qa", element: <QA /> },
  {
    path: "/account",
    element: <>{isLoggedIn ? <Navigate to="/" /> : <Account />}</>,
  },
  {
    path: "/favorites",
    element: (
      <PrivateRoute>
        <Favorites />
      </PrivateRoute>
    ),
  },
  {
    path: "/basket",
    element: (
      <PrivateRoute>
        <Basket />
      </PrivateRoute>
    ),
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
