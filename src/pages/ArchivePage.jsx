import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar';
import CardItem from '../components/CardItem';
import { getAllNotes } from '../utils/data';

function ArchivePage() {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  const filteredData = notes
  .filter((item) => item.archived)
  .filter((item) => 
    item.title.toLowerCase().includes(title.toLowerCase())
  )

  return (
    <>
    <div className='bg-gray-900 w-screen h-screen overflow-y-auto flex justify-center'>
        <div className="py-24 px-8 w-full max-w-7xl">
        <h1 className=' text-white font-bold text-2xl'>Catatan Arsip</h1>
        <div className="mt-4">
          <SearchBar title={title} titleChange={setTitle} />
        </div>
        <div className="mt-8 w-full">
        {filteredData.length === 0 ? (
         <p className="text-white text-lg">Tidak ada catatan arsip.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2'>
            {filteredData.map((item) => (
                  <CardItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    createdAt={item.createdAt}
                    body={item.body}
                  />
                ))}
                </div>
            )}
        </div>
        </div>
    </div>
    </>
  )
}

export default ArchivePage