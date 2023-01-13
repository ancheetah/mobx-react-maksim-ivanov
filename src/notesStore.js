import {nanoid} from 'nanoid'

// Create a store (object) to hold notes with functions to update notes
export function createNotesStore() {
    return {
        notes: [],
        addNote(text){
            this.notes.push({
                text,id: nanoid()
            })
        },
        removeNote(id){
            this.notes = this.notes.filter(note => note.id !== id)
        }
    }
}