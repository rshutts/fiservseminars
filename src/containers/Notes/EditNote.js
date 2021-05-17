import React, { useState, useContext, useRef, useEffect } from 'react';
import NotesContext from '../../context';

export default function EditNote() {
  const { state, dispatch } = useContext(NotesContext);
  const [value, setValue] = useState(state.currentNote.text);

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === '') {
      alert('Cannot add a blank note');
    } else {
      dispatch({ type: 'UPDATE_NOTE', payload: value });
      setValue('');
    }
  };

  return (
    <div className='note-form'>
      <form onSubmit={handleSubmit} action='' className="edit-note-form">
        <textarea
          ref={ref}
          onChange={handleChange}
          value={value}
          name=''
          id=''
          cols='30'
          rows='1'
          className="edit-note"
        />
        <div className="edit-note-buttons">
          <div style={{ textAlign: 'right' }}>
            <button className="update-note">Update note</button>
          </div>
          <div style={{ textAlign: 'right' }}>
            <button className="save-note">Save note</button>
          </div>
        </div>
        
      </form>
    </div>
  );
}
