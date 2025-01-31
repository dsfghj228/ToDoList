import React, { useState } from 'react';
import '../Styles/Task.css';

type Props = {
    id: string;
    title: string;
    delTask: (id:string) => void;
    editTask: (id: string, newTitle: string) => void;
}

const Task = ({id, title, delTask, editTask}: Props) => {
    const [ disabled, setDisabled ] = useState<boolean>(false);
    const [ isEditing, setIsEditing ] = useState<boolean>(false);
    const [ editingTask, setEditingTask ] = useState<string>(title);

    const deleteTask = (id:string) => {
      setDisabled(true);
      delTask(id);
      setDisabled(false);
    }

    const edit = async (id: string, newTitle: string) => {
        if(newTitle !== "") {
            editTask(id, newTitle);
            setIsEditing(false);
        }
    }

  return (
    <>
        {!isEditing ? 
        (
            <div className='wrap'>
                <div key={id} className='task'>{title}</div>
                <div className='btn-box'>
                    <button className='edit-btn' onClick={() => setIsEditing(true)}>Edit</button>
                    <button className='done-btn' 
                            disabled={disabled} 
                            onClick={() => deleteTask(id)}>Done</button>
                </div>
            </div>
    ) : (
        <div className='wrap'>
            <input className='edit-input'
                type='text' 
                placeholder='Enter changes in the task'
                value={editingTask}
                onChange={(e) => setEditingTask(e.target.value)}/>
            <div className='btn-box'>
                <button className='edit-btn'
                        onClick={() => edit(id, editingTask)}>Edit</button>
                <button className='cancel-btn'
                        onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
        </div>
        )}
    </>
  )
}

export default Task