const LOCAL_URL = import.meta.env.VITE_STATIC_URL;

const ProcuctCard = ({title, price, description, images, category, name, username}) => {
    return (
        <div className="Product-card">
            <img className="Product-img" src={`${LOCAL_URL}/img/${images}`} alt={title} />
            <div className="Product-info">
                <h3 className="Product-info">{title}</h3>
                <p className="Product-info">{description}</p>
                <p className="Product-price">Precio: {price}€</p>
                <p className="Product-category"><b>Categoria: </b>{category}</p>
                <p className="Product-category"><b>Creado por: </b>{name}</p>
            </div>
        </div>
    );
}

export default ProcuctCard;