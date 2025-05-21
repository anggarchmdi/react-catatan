import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 center p-4">
      <h1 className="text-6xl font-bold text-sky-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-white">Halaman Tidak Ditemukan</h2>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all transform hover:scale-95 duration-300"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default NotFound;
