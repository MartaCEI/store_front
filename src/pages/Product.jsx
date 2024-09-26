import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState([]);
    const { VITE_API_URL: URL } = import.meta.env;
    const { id } = useParams();


    useEffect(() => {
        fetchProductById();
    }, []);

    const fetchProductById = async () => {
        try {
            const response = await fetch(`${URL}/products/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Producto obtenido:", data);
                setProduct(data);
            } else {
                console.error("Error:", data.message);
            }
        } catch (error) {
            console.error("Error al obtener el producto:", error);
        }
    }
    
    return (
        <section className="Product-section">
            {/* <h2>Detalles del producto</h2>
            <h3>{title}</h3>
            <img src={`${URL}/img/${images}`} alt={title} />
            <p>{description}</p>
            <p>Precio: {price}€</p>
            <p>Categoria: {category}</p>
            <p>Creado por: {name}</p>
            <p>Vendido por: {username}</p> */}
        </section>
    );
}
export default Product;