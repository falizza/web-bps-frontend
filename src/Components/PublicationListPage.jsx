// import React from 'react';
// export default function PublicationListPage({ publications, onDelete, onEdit }) {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <header className="mb-8 text-center md:text-left">
//         <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Daftar Publikasi BPS Provinsi DK Jakarta</h1>
//         <p className="text-gray-500 mt-1">Sumber data publikasi terkini</p>
//       </header>

//       <div className="relative overflow-x-auto shadow-xl rounded-lg">
//         <table className="w-full text-sm text-left text-gray-500">
//           <thead className="text-xs text-white uppercase bg-slate-700">
//             <tr>
//               <th scope="col" className="px-6 py-3 text-center w-16">
//                 No
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Judul
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Tanggal Rilis
//               </th>
//               <th scope="col" className="px-6 py-3 text-center">
//                 Sampul
//               </th>
//               <th scope="col" className="px-6 py-4 text-center">
//                 Aksi
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {publications.map((pub, idx) => (
//               <tr key={pub.id} className="bg-white border-b hover:bg-gray-50 transition-colors duration-200">
//                 <td className="px-6 py-4 font-medium text-gray-900 text-center">{idx + 1}</td>
//                 <td className="px-6 py-4 font-semibold text-gray-800">{pub.title}</td>
//                 <td className="px-6 py-4 text-gray-600">{pub.releaseDate}</td>
//                 <td className="px-6 py-4 flex justify-center items-center">
//                   <img
//                     src={pub.coverUrl || "/placeholder.svg"}
//                     alt={`Sampul ${pub.title}`}
//                     className="h-24 w-auto object-cover rounded shadow-md"
//                     onError={(e) => {
//                       e.target.onerror = null
//                       e.target.src = "https://placehold.co/100x140/cccccc/ffffff?text=Error"
//                     }}
//                   />
//                 </td>
//                 <td className="px-6 py-4 text-center">
//                   <div className="flex justify-center space-x-2">
//                     <button onClick={() => onEdit(pub)} title="Edit" className="text-blue-600 hover:text-blue-800 p-1">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="size-6"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
//                         />
//                       </svg>
//                     </button>

//                     <button
//                       onClick={() => onDelete(pub.id)}
//                       title="Hapus"
//                       className="text-red-600 hover:text-red-800 p-1"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="size-6"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// src/components/PublicationListPage.jsx

import React from 'react';
import { usePublications } from '../hooks/usePublications';
import { useNavigate } from 'react-router-dom';

export default function PublicationListPage() {
  const { publications } = usePublications();
  const navigate = useNavigate();

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Daftar Publikasi BPS Provinsi DK Jakarta</h1>
        <p className="text-gray-500 mt-1">Sumber data publikasi terkini</p>
      </header>
      <div className="relative overflow-x-auto shadow-xl rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-slate-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-center w-16">No</th>
              <th scope="col" className="px-6 py-3">Judul</th>
              <th scope="col" className="px-6 py-3">Tanggal Rilis</th>
              <th scope="col" className="px-6 py-3 text-center">Sampul</th>
              <th scope="col" className="px-6 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((pub, idx) => (
              <tr key={pub.id} className="bg-white border-b hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 font-medium text-gray-900 text-center">{idx + 1}</td>
                <td className="px-6 py-4 font-semibold text-gray-800">{pub.title}</td>
                <td className="px-6 py-4 text-gray-600">{pub.releaseDate}</td>
                <td className="px-6 py-4 flex justify-center items-center">
                  <img
                    src={pub.coverUrl}
                    alt={`Sampul ${pub.title}`}
                    className="h-24 w-auto object-cover rounded shadow-md"
                    onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x140/cccccc/ffffff?text=Error'; }}
                  />
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs font-semibold"
                    onClick={() => navigate(`/publications/edit/${pub.id}`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}