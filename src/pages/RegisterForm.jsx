import { useState } from "react";
import '../css/Register.css';
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    // const [conSubmit, setCanSubmit] = useState()
    // const [tyc, setTyc] = useState(false);
    const navigate = useNavigate();

    // Informaciçópn para probar la app
    const [formData, setFormData] = useState({
        name:"",
        username:"",
        password:"",
        tyc:false,
        image: 'https://picsum.photos/200'
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/admin"); // me voy al admin
    }

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData({ ...formData, 
            [name]: type=="checkbox" ? checked : value }); 
            // En caso de que el type sea checkbox, me miras si esta checked o no,
            // sino, mirame el valor del value. 
    }

    return (
        <div className="Register-container">
            <h1 className="Register-h1">Regístrate</h1>
            <form className="Register-form" onSubmit={handleSubmit}>

                <div className="Register-div">
                <label className="Register-label" htmlFor="name">Usuario:</label>
                <input
                    className="Register-input"
                    type="name"
                    placeholder="Nombre de usuario"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className="Register-div">
                <label className="Register-label" htmlFor="username">Email:</label>
                <input
                    className="Register-input"
                    type="email"
                    placeholder="Correo electrónico"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className="Register-div">
                <label className="Register-label" htmlFor="password">Contraseña:</label>
                <input
                    className="Register-input"
                    type="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className="Register-div">
                <input
                    type="checkbox" 
                    id="tyc"
                    name="tyc"
                    onChange={handleChange}
                    required />
                <label className="Register-label" htmlFor="tyc">Acepto los términos y condiciones</label>
                </div>

                    <input className="Register-btn" type="submit">Registrarse</input>

                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </form>
        </div>
    );
}

export default RegisterForm;