// src/services/authService.js
import apiClient from '../api/axios';
export const authService = {
    async login(email, password) {
        try {
            const response = await apiClient.post('/login', {
                email,
                password
            });
            localStorage.setItem("token", response.data.token);
            return response.data;
        } catch (error) {
            throw new Error('Gagal login: ' + error.response?.data?.message || 'Terjadi kesalahan');
        }
    },
    async logout() {
        try {
            const response = await apiClient.post('/logout');
            localStorage.removeItem("token");
            return response.data;
        } catch (error) {
            throw new Error('Gagal logout: ' + error.response?.data?.message || 'Terjadi kesalahan');
        }
    },

    async getUser() {
        try {
            const response = await apiClient.get('/user');
            return response.data;
        } catch (error) {
            throw new Error('Gagal ambil data user: ' + error.response?.data?.message || 'Terjadi kesalahan');
        }
    },

    isLoggedIn() {
        return !! localStorage.getItem("token");
    }
};