import { useNavigate, useParams } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import AddArchive from '../components/AddArchive';
import UnarchiveNote from '../components/UnarchiveNote';
import { useEffect, useState } from 'react';
import { archiveNote, deleteNote, getNoteById, unarchiveNote  } from '../utils/data';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const detail = getNoteById(id);
    setNote(detail);
  }, [])


  const handleDelete = () => {
    deleteNote(id);
    navigate('/');
  }

  const handleArchive = () => {
    archiveNote(id);
    navigate('/');
  }

  const handleUnarchive = () => {
    unarchiveNote(id);
    navigate('/archive');
  };

  if (!note) return <div>Data tidak ditemukan</div>;

  return (
    <>
       <div className="flex gap-2 p-4">
        <DeleteButton id={id} onDelete={handleDelete} />
        {!note.archived ? (
          <AddArchive id={id} onArchive={handleArchive} />
        ) : (
          <UnarchiveNote id={id} onUnarchive={handleUnarchive} />
        )}
      </div>
    <div className="py-24 p-8 text-white bg-gray-900 h-screen w-screen flex justify-center">
      <div className="w-full max-w-6xl max-h-screen overflow-y-auto lg:p-8 space-y-3">
      <h1 className="text-6xl font-semibold">{note.title}</h1>
      <p className="text-gray-400 text-[1.2rem]">{note.createdAt}</p>
      <p className="mt-4 text-[1.3rem] text-justify">{note.body}</p>
      </div>
    </div>
    </>
  );
}

export default DetailPage;
