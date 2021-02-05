import Axios from "axios";
const apiKey = "d2b83afac36f2258e8f766fe4782880aad1e9";
const restdb = Axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "x-apikey": apiKey,
        'Content-Type': 'application/json'
    },
});

export { apiKey, restdb };