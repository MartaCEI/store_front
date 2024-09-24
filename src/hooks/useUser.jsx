import { createContext, useContext, useState, useEffect } from "react";

// Craaer un contexto de usuario
const UserContext = createContext;

// Crear un provider (mandamons funcionalidades a nuestro contexto) y exportarlo para usarlo en main.js

export function UserProvider({children}) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        
    }, []);

    // funcion ligin
    const login = (userData) => {
        setUser(userData)
    }

    // funcion register
    const register = () => {
        console.log("Estoy aquí")
    }

    //funcion logout 
    const logout = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{user, login, logout, register}}>
            {children}
        </UserContext.Provider>
    )
}

// cunstom hook llamado use user
// Crear un custom hooll para porder usarlo en nuestro contexto de usuario 
// Se exporta para porder usarlo desde cualquier componente
export function useUser() {
    return useContext(useContext);
}
