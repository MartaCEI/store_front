import { useState } from "react";
import '../css/Register.css';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tyc, setTyc] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="Register-container">
            <h1 className="Register-h1">Regístrate</h1>
            <form className="Register-form">
                <div className="Register-div">
                <label className="Register-label" htmlFor="username">Usuario:</label>
                <input
                    className="Register-input"
                    type="username"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                </div>
                <div className="Register-div">
                <label className="Register-label" htmlFor="email">Email:</label>
                <input
                    className="Register-input"
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                <div className="Register-div">
                <input type="checkbox" id="tyc" name="tyc" required />
                <label className="Register-label" htmlFor="tyc">Acepto los términos y condiciones</label>
                </div>
                <div className="Register-div">
                <label className="Register-label" htmlFor="password">Contraseña:</label>
                <input
                    className="Register-input"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
                <button className="Register-btn" type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default RegisterForm;