import axios from "axios";

const api = axios.create({
    baseURL: "teste",
});

export { api };
