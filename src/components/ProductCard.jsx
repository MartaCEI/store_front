import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const LOCAL_URL = import.meta.env.VITE_STATIC_URL;

const ProcuctCard = ({_id, title, price, description, images, category, userId}) => {
    // const { name, username} = userId;

    return (
        <div className="Product-innerContainer">
            <img className="Product-img" src={`${LOCAL_URL}/img/${images}`} alt={title} />
            <h3 className="Product-title">{title}</h3>
            <p className="Product-info">{description}</p>
            <p className="Product-price">Precio: {price}€</p>
            <p className="Product-category"><b>Categoria: </b>{category}</p>
            <p className="Product-username"><b>Creado por: </b>{name}</p>
            <Link to={`/product/${_id}`} className="Product-button"><button className="Product-username">Ver más</button></Link>
        </div>
    );
}

export default ProcuctCard;