const BASE_URL = "https://retoolapi.dev/zu9TVE/jokes";
import axios, { AxiosInstance } from 'axios';

const axiosOptions ={
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "Application/json",
        withCredentials: true,
    }

}

//normal axios request
export const api: AxiosInstance = axios.create(axiosOptions);