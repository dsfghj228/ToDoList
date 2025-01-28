import React, { useState } from 'react';
import '../Styles/TaskInput.css';

type Props = {}

const TaskInput = (props: Props) => {
    const [ task, setTask ] = useState<string>("");
  return (
    <div>
        <input className="task-input" 
               value={task} 
               onChange={(e) => setTask(e.target.value)} 
               placeholder="Enter task description" />
        <button>Add</button>
    </div>
  )
}

export default TaskInput;