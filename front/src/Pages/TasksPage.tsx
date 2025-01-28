import React from 'react'
import Navbar from '../Components/Navbar.tsx'
import TaskInput from '../Components/TaskInput.tsx'
import '../Styles/TasksPage.css'

type Props = {}

const TasksPage = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="main-part">
        <TaskInput />
      </div>
    </div>
  )
}

export default TasksPage;