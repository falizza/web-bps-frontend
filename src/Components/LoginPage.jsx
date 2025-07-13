// import { useState } from "react"

// function BpsLogo() {
//   return (
//     <img
//       src="https://www.pinclipart.com/picdir/big/532-5327590_logo-badan-pusat-statistik-clipart.png"
//       alt="BPS Logo"
//       className="h-20 w-20 mx-auto mb-4"
//     />
//   )
// }

// export default function LoginPage({ onLogin }) {
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     // Validasi sederhana (untuk demo)
//     if (!username || !password) {
//       setError("Username dan password harus diisi!")
//       return
//     }

//     // Login sederhana (untuk demo, bisa pakai username/password apa saja)
//     if (username.length >= 3 && password.length >= 3) {
//       onLogin(username)
//     } else {
//       setError("Username dan password minimal 3 karakter!")
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
//         <div className="text-center mb-8">
//           <BpsLogo />
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">Login Publikasi</h1>
//           <p className="text-gray-600">BPS DK JAKARTA</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => {
//                 setUsername(e.target.value)
//                 setError("") // Clear error saat user mengetik
//               }}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
//               placeholder="Masukkan username"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value)
//                 setError("") // Clear error saat user mengetik
//               }}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
//               placeholder="Masukkan password"
//             />
//           </div>

//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105"
//           >
//             Login
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-500">Gunakan username dan password minimal 3 karakter</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// src/components/LoginPage.jsx
import React, { useState } from 'react';
import BpsLogo from '../assets/LogoBPS.png';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginAction, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validasi sederhana
    if (!email || !password) {
      alert('Email dan password harus diisi!');
      return;
    }
    
    try {
      await loginAction(email, password);
      // Redirect ke publications setelah login berhasil
      navigate('/publications');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <div className="flex flex-col items-center mb-6">
          <img src={BpsLogo} alt="BPS Logo" className="h-16 w-16 mb-2" />
          <h1 className="text-2xl font-bold text-gray-800 text-center">Login</h1>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 ${
                loading ? 'bg-gray-100 cursor-not-allowed' : 'border-gray-300'
              }`}
              placeholder="Masukkan email"
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 ${
                loading ? 'bg-gray-100 cursor-not-allowed' : 'border-gray-300'
              }`}
              placeholder="Masukkan password"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full font-bold py-2 px-6 rounded-lg transition-colors duration-300 ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-sky-700 hover:bg-sky-800 text-white'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Memproses...
              </div>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
} 