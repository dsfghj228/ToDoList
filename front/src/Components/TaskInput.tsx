import React, { useState } from 'react';
import '../Styles/TaskInput.css';

type Props = {
    addTask: (title: string) => void;
}

const TaskInput = ({ addTask }: Props) => {
    const [ task, setTask ] = useState<string>("");
    const [ disabled, setDisabled ] = useState<boolean>(false)

    const createNewTask = ( title: string ) => {
      if(title !== "") {
        setDisabled(true)
        addTask(title)
        setTask("")
        setDisabled(false)
      }
    }

  return (
    <div>
        <input className="task-input"
               type='text' 
               value={task} 
               onChange={(e) => setTask(e.target.value)} 
               placeholder="Enter task description" />
        <button disabled={disabled} onClick={() => createNewTask(task)}>Add</button>
    </div>
  )
}

export default TaskInput;