// // src/api/axios.js
// import axios from "axios";
// const apiClient = axios.create({
//     baseURL: import.meta.env.VITE_API_URL + "/api",
//     withCredentials: true,
//     headers: {
//         Accept: "application/json", "Content-Type": "application/json",
//     },
// });
// // Interceptor untuk menambahkan Authorization header dari localStorage
// apiClient.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             config.headers["Authorization"] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );
// export default apiClient;

// src/api/axios.js
import axios from "axios";

const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    withCredentials: true, // buat cookie/session kalau pakai Sanctum, dsb
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

// Interceptor buat auto masukin token dari localStorage ke header
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
export default apiClient;