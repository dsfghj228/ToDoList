import axios from "axios"

const api = "http://localhost:5088/api";

type UserProfileToken = {
    userName: string;
    email: string;
    token: string;
}

export const loginAPI = async (username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "/account/login", {
            username: username,
            password: password
        })

        return data;
    } catch (err) {
        console.log(err)
    }
}

export const registerAPI = async (email: string, username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "/account/register", {
            email: email,
            username: username,
            password: password
        })

        return data;
    } catch (err) {
        console.log(err)
    }
}