import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout";
import Home from "../../pages/Home";
import AddProduct from "../../pages/AddProduct";
import Carrito from "../../pages/Carrito";
import RegisterForm from "../../pages/RegisterForm";
import Admin from "../../pages/Admin";
import Login from "../../pages/Login";
import { PrivateRoute } from "../../components/PrivateRoute";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/addProduct",
                    element: <AddProduct />,
                },
                {
                    path: "/carrito",
                    element: <Carrito />,
                },
                {
                    path: "/register",
                    element: <RegisterForm />,
                },
                {
                    path: "/admin",
                    element: <PrivateRoute><Admin /></PrivateRoute>,
                },
                {
                    path: "/login",
                    element: <Login />
                },
            ],
        }
    ]
);

export default router;
