import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../ReduxToolkit/store';
import '../Styles/TasksBox.css';

type Props = {
  delTask: (id:string) => void;
}

const TasksBox = ({ delTask }: Props) => {
    const { tasks } = useSelector((state: RootState) => state.tasks);
    const [ disabled, setDisabled ] = useState<boolean>(false);

    const deleteTask = (id:string) => {
      setDisabled(true);
      delTask(id);
      setDisabled(false);
    }

    return (
        <div className='tasks-box'>
          {tasks.length !== 0 ? (
            tasks.map(t => {
              return <div className='wrap'>
                <div key={t.id} className='task'>{t.title}</div>
                <div className='btn-box'>
                  <button className='done-btn' disabled={disabled} onClick={() => deleteTask(t.id)}>Done</button>
                </div>
              </div>;
            })
          ) : (
            <h1 className='no-task-notification'>No tasks yet</h1>
          )}
        </div>
      );
}

export default TasksBox;