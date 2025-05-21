let data = [
{
    id: "note-1",
    title: 'Hidup dan Perubahan',
    createdAt: 'Senin, 19 Mei 2025',
    body: '“Perubahan besar datang dari kebiasaan kecil yang dilakukan secara konsisten. Jangan remehkan langkah kecil hari ini, karena dia bisa jadi pijakan menuju impian besar esok hari.”',
    archived: false
  },
  {
    id: "note-2",
    title: 'Belajar dan Proses',
    createdAt: 'Selasa, 20 Mei 2025',
    body: '“Belajar itu bukan soal siapa yang paling cepat, tapi siapa yang paling konsisten. Tidak apa-apa lambat, asal tidak berhenti.”',
    archived: false
  },
  {
    id: "note-3",
    title: 'Semangat Berkarya',
    createdAt: 'Rabu, 21 Mei 2025',
    body: '“Karya yang besar selalu dimulai dari niat baik dan langkah pertama. Jangan menunggu sempurna untuk memulai, karena dengan memulai kita bisa menyempurnakan.”',
    archived: false
  },
  {
    id: "note-4",
    title: 'Makna Waktu',
    createdAt: 'Selasa, 20 Mei 2025',
    body: '“Waktu adalah investasi terbaik. Gunakan hari ini untuk hal-hal yang membawa kamu lebih dekat pada versi terbaik dari dirimu.”',
    archived: false
  },
];


if(!localStorage.getItem('notes')) {
    localStorage.setItem('notes', JSON.stringify(data));
}

export function getAllNotes() {
    return JSON.parse(localStorage.getItem('notes'));
}

export function addData(note) {
    const currentNotes = getAllNotes();
    const updateNotes = [...currentNotes, note];
    localStorage.setItem('notes', JSON.stringify(updateNotes));
}

export function getNoteById(id) {
  const currentNotes = getAllNotes();
  return currentNotes.find(note => note.id === id);
}

export function deleteNote(id) {
    const currentNotes = getAllNotes();
    const updateNotes = currentNotes.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(updateNotes))
}

export function archiveNote(id) {
    const currentNotes = getAllNotes();
    const updated = currentNotes.map(note => 
        note.id === id ? {...note, archived: true } : note
    );
    localStorage.setItem('notes', JSON.stringify(updated))
}

export function unarchiveNote(id) {
  const notes = getAllNotes();
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes[index].archived = false;
    localStorage.setItem('notes', JSON.stringify(notes));
  }
}

export function generateId() {
  const notes = getAllNotes();
  const lastId = notes.length > 0
    ? Math.max(...notes.map(note => {
        const match = note.id.match(/note-(\d+)/);
        return match ? parseInt(match[1]) : 0;
      }))
    : 0;

  return `note-${lastId + 1}`;
}
