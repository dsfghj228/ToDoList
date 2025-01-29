import axios from "axios";

const api = "http://localhost:5088/api";

export const getTasks = async () => {
    const data = await axios.get(api + "/Tasks");

    return data;
};