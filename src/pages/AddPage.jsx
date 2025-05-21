import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addData, generateId } from '../utils/data';
import { MdOutlineDone } from 'react-icons/md';

function AddPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

  const newNote = {
    id: generateId(),
    title,
    createdAt: new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
    body,
    archived: false
  };

  addData(newNote);
  navigate('/');
};

  return (
    <div className="w-screen h-screen py-20 bg-gray-900 text-white flex justify-center">
      <div className="w-full max-w-6xl py-8 p-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-4xl lg:text-7xl bg-transparent"
            placeholder="Catatan rahasia"
          />
          <div className="h-full max-h-56 lg:max-h-96">
            <textarea
              name="catatan"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full px-4 py-3 max-h-full min-h-72 lg:min-h-96 text-2xl rounded-lg mt-8 bg-transparent"
              placeholder="Tulis isi catatanmu di sini..."
            />
          </div>
          <div className="absolute z-10 bottom-5 right-5 bg-white text-black w-10 h-10 rounded-full text-3xl flex justify-center items-center font-bold">
            <div className="absolute -z-10 w-8 h-8 bg-emerald-500 duration-300 rounded-full animate-ping"></div>
            <button type="submit" className="hover:cursor-pointer">
              <MdOutlineDone />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPage;
