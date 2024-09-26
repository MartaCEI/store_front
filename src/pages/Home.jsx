import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import '@/css/products.css';

const Home = () => {
    const [productsList, setProductsList] = useState([]);
    const { VITE_API_URL: URL } = import.meta.env;

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const respuesta = await fetch(`${URL}/products`)
            const objeto = await respuesta.json();
            console.log(objeto);

            setProductsList(objeto);

        } catch (error) {
            console.log("Error al hacer el fetch de los productos:", error);
        }
    }

    return (
        <section className="Product-container">
            <ul className="Product-ul">
                {
                productsList.map((product, index) => (
                    <li className="Product-li" key={index}>
                        <ProductCard {...product}/>
                    </li>
                    
                ))
                }
            </ul>
        </section>
    );
}
export default Home;