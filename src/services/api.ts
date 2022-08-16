import axios from "axios";

const api = axios.create({
    baseURL: "http://ara137580.protheus.cloudtotvs.com.br:8400/rest/api",
});

export { api };
