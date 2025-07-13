// const navItems = [
//   { id: "publications", label: "Daftar Publikasi" },
//   { id: "add", label: "Tambah Publikasi" },
// ]

// function BpsLogo() {
//   return (
//     <img
//       src="https://www.pinclipart.com/picdir/big/532-5327590_logo-badan-pusat-statistik-clipart.png"
//       alt="BPS Logo"
//       className="h-12 w-12"
//     />
//   )
// }

// export default function Navbar({ currentPage, setCurrentPage, currentUser, onLogout }) {
//   return (
//     <nav className="bg-[#0369A1] shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center space-x-3">
//             <BpsLogo />
//             <span className="text-white text-base md:text-lg font-bold tracking-wider hidden sm:block">
//               BADAN PUSAT STATISTIK PROVINSI DK JAKARTA
//             </span>
//           </div>

//           <div className="flex items-center space-x-4">
//             {/* Menu Navigation */}
//             <div className="flex items-center space-x-2">
//               {navItems.map((item) => {
//                 const isActive = currentPage === item.id
//                 return (
//                   <button
//                     key={item.id}
//                     onClick={() => setCurrentPage(item.id)}
//                     className={
//                       `px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 border border-transparent ` +
//                       `${isActive ? "bg-slate-200 text-sky-900 shadow-inner" : "text-sky-100 hover:bg-sky-700 hover:text-white"}`
//                     }
//                   >
//                     {item.label}
//                   </button>
//                 )
//               })}
//             </div>

//             {/* User Info & Logout */}
//             <div className="flex items-center space-x-3 border-l border-sky-300 pl-4">
//               <span className="text-sky-100 text-sm hidden sm:block">
//                 Halo, <span className="font-semibold">{currentUser}</span>
//               </span>
//               <button
//                 onClick={onLogout}
//                 className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-300"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }


// // src/components/Navbar.jsx
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// const navItems = [
//   { id: "publications", label: "Daftar Publikasi", path: "/publications" },
//   { id: "add", label: "Tambah Publikasi", path: "/publications/add" },
//   { id: "logout", label: "Logout", path: "/logout" },
// ];
// function BpsLogo() {
//   return (
//     <img

//       src="https://res.cloudinary.com/djcm0swgo/image/upload/v1751775675/bps-
// logo_1_ldppzk.png"

//       alt="BPS Logo"
//       className="h-12 w-12"
//     />
//   );
// }
// export default function Navbar() {
//   const location = useLocation();
//   const handleLogout = async () => {
//     // Akan diisi nanti
//   };
//   // Jangan tampilkan navbar di halaman login
//   if (location.pathname === "/login") {
//     return null;
//   }
//   return (

//     <nav className="bg-[#0369A1] shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center space-x-3">
//             <BpsLogo />
//             <span className="text-white text-base md:text-lg font-bold tracking-wider hidden sm:block">
//               BPS PROVINSI BENGKULU
//             </span>
//           </div>
//           <div className="flex items-center space-x-2">
//             {navItems.map((item) => {
//               const isActive =
//                 location.pathname === item.path ||
//                 (item.id === "add" &&
//                   location.pathname.startsWith("/publications/add")) ||
//                 (item.id === "publications" &&
//                   location.pathname === "/publications");
//               if (item.id === "logout") {
//                 return (
//                   <button
//                     key={item.id}

//                     onClick={handleLogout}

//                     className="px-3 py-2 rounded-md text-sm font-semibold bg-red-500 text-white hover:bg-red-600 transition-all duration-300 cursor-pointer shadow-sm"
//                   >
//                     {item.label}
//                   </button>
//                 );
//               }
//               return (
//                 <Link
//                   key={item.id}
//                   to={item.path}

//                   className={`px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 border border-transparent cursor-pointer ${isActive
//                       ? "bg-white text-sky-900 shadow-md font-bold"
//                       : "text-sky-100 hover:bg-sky-700 hover:text-white"
//                     }`}
//                 >
//                   {item.label}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const navItems = [
  { id: "publications", label: "Daftar Publikasi", path: "/publications" },
  { id: "add", label: "Tambah Publikasi", path: "/publications/add" },
  { id: "logout", label: "Logout", path: "/logout" },
];

function BpsLogo() {
  return (
    <img
      src="https://res.cloudinary.com/djcm0swgo/image/upload/v1751775675/bps-logo_1_ldppzk.png"
      alt="BPS Logo"
      className="h-15 w-15"
    />
  );
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logoutAction } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutAction();
      navigate("/login");
    } catch (err) {
      console.error("Logout gagal:", err.message);
      alert("Logout gagal: " + err.message);
    }
  };

  if (location.pathname === "/login") {
    return null; // Sembunyikan navbar di halaman login
  }

  return (
    <nav className="bg-[#0369A1] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <BpsLogo />
            <span className="text-white text-xl md:text-2xl font-bold tracking-wider hidden sm:block">
              BADAN PUSAT STATISTIK PROVINSI DK JAKARTA
            </span>
          </div>
          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.id === "add" &&
                  location.pathname.startsWith("/publications/add")) ||
                (item.id === "publications" &&
                  location.pathname === "/publications");

              if (item.id === "logout") {
                return (
                  <button
                    key={item.id}
                    onClick={handleLogout}
                    className="px-3 py-2 rounded-md text-sm font-semibold bg-red-500 text-white hover:bg-red-600 transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 border border-transparent cursor-pointer ${isActive
                      ? "bg-white text-sky-900 shadow-md font-bold"
                      : "text-sky-100 hover:bg-sky-700 hover:text-white"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
