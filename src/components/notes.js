import React from 'react'
import { Link } from 'gatsby'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { getCurrentUser } from '../utils/auth'
import { createNote, deleteNote, updateNote } from '../graphql/mutations'
import { listNotes } from '../graphql/queries'
import {
  onCreateNote,
  onDeleteNote,
  onUpdateNote,
} from '../graphql/subscriptions'

const user = getCurrentUser()

class Notes extends React.Component {
  state = {
    id: '',
    note: '',
    notes: [],
  }

  getUser = async () => {
    const user = await Auth.currentAuthenticatedUser()
    return user
  }

  componentDidMount() {
    this.getNotes()
    this.createNoteListener = this.getUser().then(user => {
      API.graphql(
        graphqlOperation(onCreateNote, {
          owner: user.username,
        })
      ).subscribe({
        next: noteData => {
          const newNote = noteData.value.data.onCreateNote
          const prevNotes = this.state.notes.filter(
            note => note.id !== newNote.id
          )
          const updatedNotes = [...prevNotes, newNote]
          this.setState({ notes: updatedNotes })
        },
        error: error => {
          console.warn(error)
        },
      })
    })

    this.deleteNoteListener = this.getUser().then(user => {
      API.graphql(
        graphqlOperation(onDeleteNote, { owner: user.username })
      ).subscribe({
        next: noteData => {
          const deletedNote = noteData.value.data.onDeleteNote
          const updatedNotes = this.state.notes.filter(
            note => note.id !== deletedNote.id
          )
          this.setState({ notes: updatedNotes })
        },
      })
    })

    this.updateNoteListener = this.getUser().then(user => {
      API.graphql(
        graphqlOperation(onUpdateNote, { owner: user.username })
      ).subscribe({
        next: noteData => {
          const { notes } = this.state
          const updatedNote = noteData.value.data.onUpdateNote
          const index = notes.findIndex(note => note.id === updatedNote.id)
          const updatedNotes = [
            ...notes.slice(0, index),
            updatedNote,
            ...notes.slice(index + 1),
          ]
          this.setState({ notes: updatedNotes, note: '', id: '' })
        },
      })
    })
  }

  getNotes = async () => {
    const result = await API.graphql(graphqlOperation(listNotes))
    this.setState({ notes: result.data.listNotes.items })
  }

  handleChangeNote = event => this.setState({ note: event.target.value })

  hasExistingNote = () => {
    const { notes, id } = this.state
    if (id) {
      const isNote = notes.findIndex(note => note.id === id) > -1
      return isNote
    }
    return false
  }

  handleUpdateNote = async () => {
    const { id, note } = this.state
    const textarea = {
      id,
      note,
    }
    await API.graphql(graphqlOperation(updateNote, { textarea }))
  }

  handleAddNote = async event => {
    const { note } = this.state
    event.preventDefault()
    if (this.hasExistingNote()) {
      this.handleUpdateNote()
    } else {
      // check if we have an existing note, if so, update it
      const textarea = { note }
      await API.graphql(graphqlOperation(createNote, { textarea }))
      // const newNote = result.data.createNote;
      // const updatedNotes = [newNote, ...notes];
      this.setState({ note: '' })
    }
  }

  handleDeleteNote = async noteId => {
    const textarea = { id: noteId }
    await API.graphql(graphqlOperation(deleteNote, { textarea }))
    // const deletedNoteId = result.data.deleteNote.id;
    // const updatedNotes = notes.filter((note) => note.id !== deletedNoteId);
    // this.setState({ notes: updatedNotes });
  }

  handleSetNote = ({ note, id }) => this.setState({ note, id })

  render() {
    const author = user.name
    const { notes, note, id } = this.state
    return (
      <div className="notes-wrapper">
        <h1>Notes</h1>
        <div className="notes-form">
        <p>User: {author}</p>
          <form onSubmit={this.handleAddNote}>
          <textarea
            type="text"
            placeholder="Write your note!"
            onChange={this.handleChangeNote}
            value={note}
            className="notes-input"
          />
          <button className="add-note" type="submit">{id ? 'Update Note' : 'Add Note'}</button>
        </form>
        <div>
          {notes.map(item => (
            <div key={item.id} className="flex items-center">
              <li onClick={() => this.handleSetNote(item)} className="">
                {item.note}
              </li>
              <button onClick={() => this.handleDeleteNote(item.id)}>
                <span>&times;</span>
              </button>
            </div>
          ))}
        </div>
        </div>
      </div>
    )
  }
}

export default Notes
