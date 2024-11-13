import axios from "axios";

// 59315000/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;