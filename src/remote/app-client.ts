import axios from "axios";

export const appClient = axios.create({
    baseURL: 'http://awsjoshua.duckdns.org:3000',
    headers: {
        'Content-Type': 'application/json'
    }
}

)
