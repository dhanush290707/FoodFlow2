import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    
    // 👇 PASTE YOUR COPIED RENDER URL HERE 👇
    const API_URL = 'https://foodflow2.onrender.com'; 
    
    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('foodShareUser');
            if (storedUser) {
                setLoggedInUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error("Failed to parse user data from localStorage", error);
            localStorage.removeItem('foodShareUser');
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem('foodShareUser', JSON.stringify(userData));
        setLoggedInUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('foodShareUser');
        setLoggedInUser(null);
    };

    return (
        <AuthContext.Provider value={{ loggedInUser, login, logout, API_URL }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};