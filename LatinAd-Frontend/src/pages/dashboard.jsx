import React from 'react'
import NavBar from '../components/NavBar'
import ScreenList from '../components/ScreenList'

function Dashboard() {
  return (
  <>
    <NavBar/>
    <div className='loginSectionBackground'>
    <ScreenList />
    </div>
  </>
  )
}

export default Dashboard