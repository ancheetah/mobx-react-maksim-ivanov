import React from 'react';
import './App.css';
import { NewNoteForm } from './NewNoteForm';
import { useNotesStore } from './NotesContext';
import { useObserver } from 'mobx-react';

function App() {
    const notesStore = useNotesStore();

    // Make the component observable with useObserver hook
    return useObserver(() => (
        <>
            <h1>Notes</h1>
            <ul>
                {notesStore.notes.map((note) => (
                    <li key={note.id}>
                        {note.text}{' '}
                        <span onClick={() => notesStore.removeNote(note.id)}>
                            [X]
                        </span>
                    </li>
                ))}
            </ul>
            <NewNoteForm />
        </>
    ));
}

export default App;
