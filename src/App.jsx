// // src/App.jsx
// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import PublicationListPage from './components/PublicationListPage';
// import AddPublicationPage from './components/AddPublicationPage';
// import Footer from './components/Footer';
// import EditPublicationPage from './Components/EditPublicationPage';
// import LoginPage from "./components/LoginPage"

// const initialPublications = [
//   {
//     id: 1,
//     title: "Berita Resmi Statistik Provinsi DKI Jakarta Maret 2025",
//     releaseDate: "2025-03-06",
//     description:
//       "Publikasi Berita Resmi Statistik Provinsi DKI Jakarta Maret 2025 menyajikan informasi terkini mengenai perkembangan inflasi, kinerja ekspor-impor, transportasi umum, aktivitas pelabuhan dan bandara, serta produksi padi di wilayah DKI Jakarta.",
//     coverUrl:
//       "https://jakarta.bps.go.id/_next/image?url=https%3A%2F%2Fweb-api.bps.go.id%2Fcover.php%3Ff%3DIDqG80%2BvW7kw47bvpOpPYDI0SlFRSSthNFFYSXF4LzNNSk1YUExrUTRvUmx4c3ErcDBiK0dIYTUyVVlwRTFPUFYwZ1hmeUQ0Z0Y2b1JJb1lmaHRLbjBQV1NrRkdkZlEwbEpOR1lUOVR2VVdiWjJwOUozSG1jSUJEOXVBYUVEekRXZFFzT3ZWN0lwb0tGQ2NJ&w=3840&q=75",
//   },
//   {
//     id: 2,
//     title: "Provinsi DKI Jakarta Dalam Angka 2025",
//     releaseDate: "2022-02-28",
//     description:
//       "Publikasi Provinsi DKI Jakarta Dalam Angka 2025 menyajikan rangkuman data lengkap terkait geografi, iklim, pemerintahan, sosial‑demografi, dan perekonomian wilayah Jakarta.",
//     coverUrl:
//       "https://jakarta.bps.go.id/_next/image?url=https%3A%2F%2Fweb-api.bps.go.id%2Fcover.php%3Ff%3D5LVnKIMNMiBKzMhhhQBQhmxuQ1RXSlpaZm9EY0w5dHdiMjBMaTYvekJBZXk3alcwMUo5LzluTXcraFhwWkdZSG1aaVJDc1NxWW4xdjV6MkJGWGtLeEdMOFJjb0kxbTBYbHN2Mm5JUTdwdm53UVdHM1Znb3BkOVgxU2g2dVQyM3U3aEtwQnloUG1RZ3VNaC9E&w=3840&q=75",
//   },
//   {
//     id: 3,
//     title: "Statistik Industri Manufaktur Produksi Provinsi DKI Jakarta 2022",
//     releaseDate: "2025-02-14",
//     description:
//       "Publikasi Statistik Industri Manufaktur Provinsi DKI Jakarta adalah laporan tahunan yang berisi data terperinci mengenai jumlah, nilai, dan indeks produksi sektor manufaktur di wilayah Jakarta sepanjang tahun 2022.",
//     coverUrl:
//       "https://jakarta.bps.go.id/_next/image?url=https%3A%2F%2Fweb-api.bps.go.id%2Fcover.php%3Ff%3DIpcu%2F1bZ3d1BCvS7tI7eNTBqZ0cxbCtIbnAvTTQweU9hRk1iaVhCanlaOUV2UmtMMVp6K0lWN0xGZXlyd0Y2RVRYbUpXS1lZbG9UN1QvY3BDM0EvdndvZFU3MHh3eTBWR0Fxc25EblQvWmhETHp1bm4vM3RURXNqK2ZHNGhnd0gxMmFGYkZnMjYvYy9QSHlE&w=3840&q=75",
//   },
//   {
//     id: 4,
//     title: "Keadaan Angkatan Kerja Provinsi DKI Jakarta 2024",
//     releaseDate: "2025-04-22",
//     description:
//       "Publikasi Keadaan Angkatan Kerja Provinsi DKI Jakarta 2024 memuat hasil Survei Sakernas Agustus 2024 hingga tingkat kabupaten/kota, dan menyajikan data komprehensif tentang angkatan kerja dalam format tabel-tabel pokok ketenagakerjaan.",
//     coverUrl:
//       "https://jakarta.bps.go.id/_next/image?url=https%3A%2F%2Fweb-api.bps.go.id%2Fcover.php%3Ff%3DPqCohnkXTXp1Ljnp1RYFrEdJbzFJSFdmSmttS2J6d0lDQ1hiRmhzNWZYaG9CTmhtQlc0N3RxaDJFeGJxajNkNCtSdDlJTDBsb3IrM1o3cEpiYkozdGFyRVZHaThKN2NYbE1Ja3FNQWtqelBqbUNUVXo2K0trQmo4MjdXbnlGNzRLYWRjUWxHeHF0LzVubklx&w=3840&q=75",
//   },
//   {
//     id: 5,
//     title: "Ringkasan Eksekutif Luas Panen dan Produksi Padi di Provinsi DKI Jakarta 2024",
//     releaseDate: "2025-06-02",
//     description:
//       "Publikasi Ringkasan Eksekutif Luas Panen dan Produksi Padi di Provinsi DKI Jakarta 2024 menyajikan gambaran singkat mengenai total luas panen dan volume produksi padi serta beras selama periode Januari–Desember 2024, lengkap dengan estimasi potensi panen untuk periode selanjutnya.",
//     coverUrl:
//       "https://jakarta.bps.go.id/_next/image?url=https%3A%2F%2Fweb-api.bps.go.id%2Fcover.php%3Ff%3D2qCg6jyz1b6dyRN8RdDgU0g2OGNiSXgzS1NuUnNPbFp1U2Jnd2hlSDFRVGdTZGhSNGdTWEVDK2dkbXd3QUkxdjlGaDFaWGY1eldsUEtBZTlhdG1oSm5zMnVkSnVQbk52UGlod2hMK0JZaWtlZ2VSK0YxZmtVZU5ZUmF0YlhsZzZMdFhaTTVBUFQrK3BOSk5L&w=3840&q=75",
//   },
// ]
// export default function App() {
//   const [publications, setPublications] = useState(initialPublications);
//   const [currentPage, setCurrentPage] = useState('publications');
//   const [editingPub, setEditingPub] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false) // untuk login
//   const [currentUser, setCurrentUser] = useState("") // untuk user

//   //Fungsi untuk login
//   const handleLogin = (username) => {
//     setIsLoggedIn(true)
//     setCurrentUser(username)
//     setCurrentPage("publications")
//   }

//   // Fungsi untuk logout
//   const handleLogout = () => {
//     setIsLoggedIn(false)
//     setCurrentUser("")
//     setCurrentPage("publications")
//   }

//   // Jika belum login, tampilkan halaman login
//   if (!isLoggedIn) {
//     return <LoginPage onLogin={handleLogin} />
//   }

//   const handleAddPublication = newPub => {
//     setPublications([newPub, ...publications]);
//   };

//   const handleUpdatePublication = updatedPub => {
//     setPublications(prev =>
//       prev.map(pub => (pub.id === updatedPub.id ? updatedPub : pub))
//     );
//     setEditingPub(null);
//     setCurrentPage('publications');
//   };

//   const handleDeletePublication = (id) => {
//     const confirmed = window.confirm("Yakin mau hapus publikasi ini?");
//     if (confirmed) {
//       setPublications(prev => prev.filter(pub => pub.id !== id));
//     }
//   };


//   let pageContent;
//   if (currentPage === 'add') {
//     pageContent = (
//       <AddPublicationPage
//         onAddPublication={handleAddPublication}
//         setCurrentPage={setCurrentPage} />)
//   } else if (currentPage === 'edit') {
//     pageContent = (
//       <EditPublicationPage
//         editingPub={editingPub}
//         onUpdatePublication={handleUpdatePublication}
//         setCurrentPage={setCurrentPage}
//       />
//     )
//   } else {
//     pageContent = (
//       <PublicationListPage
//         publications={publications}
//         setCurrentPage={setCurrentPage}
//         onEdit={(pub) => {
//           setEditingPub(pub)
//           setCurrentPage('edit')
//         }}
//         onDelete={handleDeletePublication}
//       />
//     );
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen font-sans">
//       <Navbar
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         currentUser={currentUser}
//         onLogout={handleLogout}
//       />
//       <main className="p-4 sm:p-6 lg:p-8">{pageContent}</main>
//       <Footer />
//     </div>
//   );
// }

// src/main.jsx
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { PublicationProvider } from "./context/PublicationContext.jsx";
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <PublicationProvider>
//       <App />
//     </PublicationProvider>
//   </StrictMode>
// );

// src/App.jsx

import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import PublicationListPage from "./Components/PublicationListPage";
import AddPublicationPage from "./Components/AddPublicationPage";
import Footer from "./Components/Footer";
import LoginPage from "./Components/LoginPage";
import EditPublicationPage from "./Components/EditPublicationPage";
import ProtectedRoute from "./Components/ProtectedRoute";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar />
      <main className="p-4 sm:p-6 lg:p-8">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/publications" 
            element={
              <ProtectedRoute>
                <PublicationListPage />    
              </ProtectedRoute>
            }
          />

          <Route 
            path="/publications/add" 
            element={
              <ProtectedRoute>
                <AddPublicationPage />
              </ProtectedRoute>
            } />

          <Route
            path="/publications/edit/:id"
            element={
              <ProtectedRoute>
                <EditPublicationPage />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Navigate to="/publications" replace />} />
          <Route path="*" element={<Navigate to="/publications" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}