import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar.tsx'
import TaskInput from '../Components/TaskInput.tsx'
import '../Styles/TasksPage.css'
import { getTasks } from '../ApiConnection/apiConnection.ts'
import { useDispatch } from 'react-redux'
import { clearState, get } from '../ReduxToolkit/slice.ts'
import TasksBox from '../Components/TasksBox.tsx'

type Props = {}

const TasksPage = (props: Props) => {
  const dispatch = useDispatch();
  const [ error, setError ] = useState();

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
        <TaskInput />
        <TasksBox />
      </div>
    </div>
  )
}

export default TasksPage;