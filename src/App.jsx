import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import NotFound from './pages/NotFound';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';

function NoteApp() {
  return (
    <div className="">
      <header className=''>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/detailpage/:id" element={<DetailPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
 
export default NoteApp;