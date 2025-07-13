// src/context/AuthContext.jsx
import React, { createContext, useState } from "react";
import { authService } from "../services/authService";
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const loginAction = async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await authService.login(email, password);
            setUser(response.user);
            setToken(response.token);
            localStorage.setItem("user", JSON.stringify(response.user));
            localStorage.setItem("token", response.token);
            return response;
        } catch (error) {
            console.error("Login error:", error);
            setError(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };
    const logoutAction = async () => {
        setLoading(true);
        setError(null);
        try {
            await authService.logout();
            setUser(null);
            setToken(null);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            return true;
        } catch (error) {
            console.error('Logout error:', error.message);
            setError(error.message);
            throw error; // Re-throw error agar bisa di-catch di component
        } finally {
            setLoading(false);
        }
    };
    const clearError = () => {
        setError(null);
    };
    return (
        <AuthContext.Provider value={{
            user, token, loginAction, logoutAction,
            loading, error, clearError
        }}>
            {children}
        </AuthContext.Provider>
    );
};
export { AuthContext, AuthProvider };

// import React, { createContext, useState, useEffect } from "react";
// import { authService } from "../services/authService";

// // Buat konteks auth
// const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   // State utama
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );
//   const [token, setToken] = useState(localStorage.getItem("token") || null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // 🔐 Helper: Simpen session ke state + localStorage
//   const saveSession = (user, token) => {
//     setUser(user);
//     setToken(token);
//     localStorage.setItem("user", JSON.stringify(user));
//     localStorage.setItem("token", token);
//   };

//   // ✅ Login action
//   const loginAction = async (email, password) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await authService.login(email, password);
//       saveSession(response.user, response.token);
//       return response;
//     } catch (error) {
//       console.error("Login error:", error);
//       setError(error.message);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🚪 Logout action
//   const logoutAction = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       await authService.logout();
//     } catch (error) {
//       console.error("Logout error:", error.message);
//       setError(error.message);
//       // lanjut logout lokal meskipun request gagal
//     } finally {
//       setUser(null);
//       setToken(null);
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//       setLoading(false);
//     }
//   };

//   // 🔄 Auto-fetch user saat halaman pertama kali dimuat
//   useEffect(() => {
//     const fetchUser = async () => {
//       if (token && !user) {
//         try {
//           const userData = await authService.getUser();
//           saveSession(userData, token); // Token udah ada, tinggal update user
//         } catch (err) {
//           console.error("Gagal ambil user saat init:", err.message);
//           await logoutAction(); // Auto logout kalau token invalid
//         }
//       }
//     };
//     fetchUser();
//   }, []);

//   // ❌ Clear error buat reset state error dari komponen lain
//   const clearError = () => {
//     setError(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         token,
//         loginAction,
//         logoutAction,
//         loading,
//         error,
//         clearError,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };
