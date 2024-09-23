import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout";
import Home from "../../pages/Home";
import AddProduct from "../../pages/AddProduct";
import Carrito from "../../pages/Carrito";
import RegisterForm from "../../pages/RegisterForm";


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
            ],
        }
    ]
);

export default router;
