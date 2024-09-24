import { useState } from "react";
import { useUser } from '@/hooks/useUser';

const Login = () => {
    // Informaciçópn para probar la app
    const [formData, setFormData] = useState({
        name:"Marta",
        username:"marta@gmail.com",
        password:"1234",
        image: 'https://picsum.photos/200'
    });

    const {login} = useUser;

    const handleSubmit = (event) => {
        event.preventDefault();
        login(formData)
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div>
            <form className="Login-form" onSubmit={handleSubmit}>
                <input
                    className="Login-input"
                    type="email"
                    name="username"
                    placeholder="Correo electrónico"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    className="Login-input"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input className="Login-btn" type="login" />
            </form>
        </div>
    );
}

export default Login;