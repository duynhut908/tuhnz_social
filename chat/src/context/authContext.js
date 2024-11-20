import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios"
import { makeRequest } from "../axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null // Khôi phục từ localStorage nếu có
    );

    const login = async (inputs) => {
        console.log(inputs)
        //TO DO
        try {
            const res = await makeRequest.post('auth/login', inputs);
            setCurrentUser(res.data);
            console.log(currentUser);
            localStorage.setItem("user", JSON.stringify(res.data));
            return res.data;
        } catch (err) {
            console.error("Login failed:", err);
            throw err;
        }

    };
    const handleLogout = () => {
        console.log('Logging out...');
        localStorage.removeItem('user');
        setCurrentUser(null); // Xóa currentUser thông qua setCurrentUser từ context
    };

    const register = () => {

    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser, login, register,handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}