import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../ReduxToolkit/store';
import '../Styles/TasksBox.css';
import Task from './Task.tsx';

type Props = {
  delTask: (id:string) => void;
  editTask: (id:string, newTitle: string) => void;
}

const TasksBox = ({ delTask, editTask }: Props) => {
    const { tasks } = useSelector((state: RootState) => state.tasks);

    return (
        <div className='tasks-box'>
          {tasks.length !== 0 ? (
            tasks.map(t => {
              return <Task id={t.id} title={t.title} delTask={delTask} editTask={editTask}/>;
            })
          ) : (
            <h1 className='no-task-notification'>No tasks yet</h1>
          )}
        </div>
      );
}

export default TasksBox;