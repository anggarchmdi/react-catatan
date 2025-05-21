import React, { useEffect, useState } from 'react';
import AddNote from '../components/AddNote';
import CardItem from '../components/CardItem';
import { getAllNotes } from '../utils/data';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');


  useEffect(()=> {
    setNotes(getAllNotes());
  }, []);

   const filteredNotes = notes.filter(note =>
  note.title && !note.archived && note.title.toLowerCase().includes(title.toLowerCase())
);

  return (
    <>
      <AddNote />
      <div className='bg-gray-900 w-screen h-screen overflow-y-auto flex justify-center'>
        <div className="py-24 px-8 w-full max-w-7xl">
          <h1 className='text-white font-bold text-2xl'>Catatan Aktif</h1>
          <div className="mt-4">
            <SearchBar title={title} titleChange={setTitle} />
          </div>
          <div className="mt-8 w-full">
            {filteredNotes.length === 0 ? (
              <p className="text-white text-lg">Tidak ada catatan aktif.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4">
                 {filteredNotes.map((note) => (
                   <CardItem
                   key={note.id}
                   id={note.id}
                   title={note.title}
                      createdAt={note.createdAt}
                      body={note.body}
                    />
                  ))}
              </div>
            )
          }
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
