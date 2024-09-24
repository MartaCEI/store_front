import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/Header.css';
import { useUser } from '@/hooks/useUser';

const Header = () => {
    const {user, login, logout, register} = useUser;

    return (
        <header className='Header'>
            <NavLink className='Header-a' to="/" activeClassName="active">
                <h1 className='Header-h1'>MyShop</h1>
            </NavLink>
            <nav className='Header-nav'>
                <ul className='Header-ul'>
                    <li><NavLink className='Header-a' to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink className='Header-a' to="/admin" activeClassName="active">Admin</NavLink></li>
                    <li><NavLink className='Header-a' to="/carrito" activeClassName="active">Carrito</NavLink></li>
                    {
                        user ? (
                            <>
                                <li><NavLink className="Login-btn" onClick={login} to="/login">Login</NavLink></li>
                                <li><NavLink className="Login-btn" to="/register">Registro</NavLink></li>
                            </>
                        ) : (
                            <>
                                <img src={user.image} alt={user.name} />
                                <h3>{user.name}</h3>
                                <NavLink onClick={logout}> Logout </NavLink>
                            </>
                            
                        )
                    }
                </ul>
            </nav>
                
            <button className="Login-btn" onClick={logout} type="submit">Salir</button>
        </header>
    );
}

export default Header;