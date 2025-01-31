import axios from "axios";

const api = "http://localhost:5088/api";

export const getTasks = async () => {
    const response = await axios.get(api + "/Tasks");

    return response;
};

export const postTask = async (title: string) => {
    const response = await axios.post(api + "/Tasks", { title });
    
    return response.data;
};

export const deleteTask = async (id: string) => {
    const response = await axios.delete(api + "/Tasks/" + id);

    return response;
}

export const putTask = async (id: string, newTitle: string) => {
    const response = await axios.put(api + "/Tasks/" + id, { title: newTitle});

    return response.data;
}