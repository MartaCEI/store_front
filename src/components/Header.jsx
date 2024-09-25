import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/Header.css';
import { useUser } from '@/hooks/useUser';

const Header = () => {
    const { user, login, logout, register } = useUser(); // Correctly invoke the useUser hook

    return (
        <header className='Header'>
            <NavLink className='Header-a' to="/">
                <h1 className='Header-h1'>MyShop</h1>
            </NavLink>
            <nav className='Header-nav'>
                <ul className='Header-ul'>
                    <li><NavLink className='Header-a' to="/">Home</NavLink></li>
                    <li><NavLink className='Header-a' to="/admin">Admin</NavLink></li>
                    <li><NavLink className='Header-a' to="/carrito">Carrito</NavLink></li>
                    {
                        !user ? (  // If no user is logged in
                            <>
                                <li><NavLink className="Login-btn" to="/login">Login</NavLink></li>
                                <li><NavLink className="Login-btn" to="/register">Registro</NavLink></li>
                            </>
                        ) : (  // If user is logged in
                            <>
                                <img className="Header-img" src={user.image} alt={user.name} />
                                <h3 className="Header-h3">{user.name}</h3>
                                <button className="Login-btn" onClick={logout} type="button">Salir</button>
                            </>
                        )
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;