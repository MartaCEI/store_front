import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <header className='Header'>
            <h1 className='Header-h1'>MyShop</h1>
            <nav className='Header-nav'>
                <ul className='Header-ul'>
                    <NavLink className='Header-a' to="/" activeClassName="active">Home</NavLink>
                    <NavLink className='Header-a' to="/addProduct" activeClassName="active">Nuevo</NavLink>
                    <NavLink className='Header-a' to="/carrito" activeClassName="active">Carrito</NavLink>
                </ul>
            </nav>
            <form className="Login-form" onSubmit={handleSubmit}>
                <input
                    className="Login-input"
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="Login-input"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="Login-btn" type="submit">Login</button>
                <Link className="Login-btn" to="/register">Register</Link>
            </form>
        </header>
    );
}

export default Header;