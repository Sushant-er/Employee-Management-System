import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../Tasklist/TaskList'
const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
       <Header />
       <TaskListNumber />
       <TaskList />
    </div>
  )
}

export default EmployeeDashboard