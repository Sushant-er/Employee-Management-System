import React, { useState } from 'react'

const header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data)
  // {
  //   setUsername('Admin')
  // }
  // else
  // {
  //   setUsername(data.firstName)
  // }

  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  console.log(user)
  const username = user?.firstName || 'Admin';

 const logOutUser = ()=>{
  localStorage.setItem('loggedInUser','')
  // localStorage.removeItem('loggedInUser');
  props.changeUser('')
  //window.location.reload()
 }



  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br></br><span className='text-3xl font-semibold'> {username} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default header