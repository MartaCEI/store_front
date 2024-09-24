import { createContext, useContext, useState, useEffect } from "react";

// Crear un contexto de usuario
const UserContext = createContext();

// Crear un provider y exportarlo para usarlo en main.js
export function UserProvider({children}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Puede agregar cualquier lógica que desee aquí en el futuro
    }, []);

    // Función login
    const login = (userData) => {
        setUser(userData);
    };

    // Función register
    const register = () => {
        console.log("Estoy aquí");
    };

    // Función logout
    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{user, login, logout, register}}>
            {children}
        </UserContext.Provider>
    );
}

// Crear un custom hook para usar el contexto de usuario
export function useUser() {
    return useContext(UserContext);
}