import axios from "axios";

const api = "http://localhost:5088/api";

export const getTasks = async () => {
    const data = await axios.get(api + "/Tasks");

    return data;
};

export const postTask = async (title: string) => {
    const response = await axios.post(api + "/Tasks", { title });
    
    return response.data;
};