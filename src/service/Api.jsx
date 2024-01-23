// Api.js
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost/reactphp/api/reactphpcrud/user.php",
    headers: {
        "Content-Type": "application/json",
    },
});

export async function add(data) {
    const res = await api.post('', data);
    return res.data; // Assuming you want to return the response data
}


