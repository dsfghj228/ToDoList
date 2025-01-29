import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../ReduxToolkit/store';
import '../Styles/TasksBox.css';

type Props = {}

const TasksBox = (props: Props) => {
    const { tasks } = useSelector((state: RootState) => state.tasks);

    return (
        <div className='tasks-box'>
          {tasks ? (
            tasks.map(t => {
              return <div className='task'>{t.title}</div>;
            })
          ) : (
            <h1 className='no-task-notification'>No tasks yet</h1>
          )}
        </div>
      );
}

export default TasksBox