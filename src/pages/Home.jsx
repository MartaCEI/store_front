import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

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

            if (objeto.status == "error") {
                setUserError(`Tuvimos un error: ${objeto.msg}`)
                return;
            } 
            setProductsList(objeto);

        } catch (error) {
            console.log("Error al hacer el fetch de los correos :", error);
        }
    }

    return (
        <section className="Product-section">
            <h2>Esta es mi lista de productos</h2>
            <div className="Products-list">
                {productsList.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </section>
    );
}
export default Home;