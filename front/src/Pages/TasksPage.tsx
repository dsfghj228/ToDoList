import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar.tsx'
import TaskInput from '../Components/TaskInput.tsx'
import '../Styles/TasksPage.css'
import { getTasks, postTask, deleteTask } from '../ApiConnection/apiConnection.ts'
import { useDispatch } from 'react-redux'
import { addTaskToStore, clearState, deleteTaskFromStore, get } from '../ReduxToolkit/slice.ts'
import TasksBox from '../Components/TasksBox.tsx'

type Props = {}

const TasksPage = (props: Props) => {
  const dispatch = useDispatch();
  const [ error, setError ] = useState();

  const addTask = async (title: string) => {
    try {
        const data = await postTask(title);
        if(data)
        {
          dispatch(addTaskToStore(data));
        }
    } catch (err) {
        console.error('Error occurred:', err);
    }
  };

  const delTask = async (id: string) => {
    try {
      const data = await deleteTask(id);
      if (data) {
        dispatch(deleteTaskFromStore(id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(clearState());
        const data = await getTasks()
                        .then(r => r.data);
        dispatch(get(data));
      } catch (err) {
        console.log(err);
        setError(err);
      }
    };

    fetchData();
}, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="main-part">
        <TaskInput addTask={addTask} />
        <TasksBox delTask={delTask} />
      </div>
    </div>
  )
}

export default TasksPage;