import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../Services/AuthService.tsx";
import axios from "axios";
import App from "../App.tsx";

type UserProfile = {
    userName: string;
    email: string;
}

type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    registerUser: (email: string, username: string, password: string) => void;
    loginUser: (username: string, password: string) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = (children: React.ReactNode) => {
    const navigate = useNavigate();
    const [ token, setToken ] = useState<string | null>(null);
    const [ user, setUser ] = useState<UserProfile | null>(null);
    //const [ isReady, setIsReady ] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if(user && token)
        {
            setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        }
        //setIsReady(true);
    }, [])

    const register = async (email: string, username: string, password: string) => {
        await registerAPI(email, username, password)
                .then((res) => {
                    if(res)
                    {
                        localStorage.setItem("token", res?.data.token);
                        const userObj = {
                            username: res?.data.userName,
                            email: res?.data.email
                        }
                        localStorage.setItem("user", JSON.stringify(userObj));
                        setToken(res?.data.token!);
                        setUser(userObj!);
                        navigate("/");
                    }
            }).catch(e => console.log(e));
    };

    const login = async (username: string, password: string) => {
        await loginAPI(username, password)
                .then((res) => {
                    if(res)
                    {
                        localStorage.setItem("token", res?.data.token);
                        const userObj = {
                            username: res?.data.userName,
                            email: res?.data.email
                        }
                        localStorage.setItem("user", JSON.stringify(userObj));
                        setToken(res?.data.token!);
                        setUser(userObj!);
                        navigate("/");
                    }
            }).catch(e => console.log(e));
    };

    const isLoggedIn = () => {
        return !!user; // преобразование в булевый тип
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken("");
        navigate("/login");
    };

    return (
        <UserContext.Provider value={{ login, user, token, logout, isLoggedIn, register }}>
            <App />
        </UserContext.Provider>
    )
};

export const useAuth = () => React.useContext(UserContext);