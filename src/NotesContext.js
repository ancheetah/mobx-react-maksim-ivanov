import React from 'react'
import { createNotesStore } from './notesStore'
import { useLocalStore } from 'mobx-react'  // make Notes Store observable

const NotesContext = React.createContext(null) // this context has a Provider and Consumer

export const NotesProvider = ({children}) => {
    const notesStore = useLocalStore(createNotesStore)

    return <NotesContext.Provider value={notesStore}>
        {children}
    </NotesContext.Provider>
}

// Create a hook to use/consume the context
export const useNotesStore = () => React.useContext(NotesContext)