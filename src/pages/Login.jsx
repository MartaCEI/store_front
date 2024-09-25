import { useState } from "react";
import { useUser } from '@/hooks/useUser';
import { useNavigate } from "react-router-dom";

const Login = () => {
    // Informaciçópn para probar la app
    const [formData, setFormData] = useState({
        name:"Marta",
        username:"marta@gmail.com",
        password:"1234",
        image: 'https://picsum.photos/200'
    });
    const navigate = useNavigate();

    const {login} = useUser();

    const handleSubmit = (event) => {
        event.preventDefault();
        login(formData)
        navigate("/admin"); // me voy al admin
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="Register-container">
            <h1 className="Register-h1">Login</h1>
            <form className="Register-form" onSubmit={handleSubmit}>

                <div className="Register-div">
                <label className="Register-label" htmlFor="name">Email:</label>
                <input
                    className="Login-input"
                    type="email"
                    name="username"
                    placeholder="Correo electrónico"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                </div>

<div className="Register-div">
<label className="Register-label" htmlFor="username">Contraseña:</label>
                <input
                    className="Login-input"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                </div>
                <input className="Login-btn" type="submit"/>
            </form>
        </div>
    );
}

export default Login;