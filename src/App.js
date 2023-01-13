import './App.css';
import { NewNoteForm } from './NewNoteForm';
import { useNotesStore } from './NotesContext';
import { useObserver } from 'mobx-react';

function App() {
  const notesStore = useNotesStore()

  // Make the component observable with useObserver hook
  return useObserver( () => (
    <>
      <ul>
        {notesStore.notes.map(note => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
      <NewNoteForm/>
    </>
  ));
}

export default App;
