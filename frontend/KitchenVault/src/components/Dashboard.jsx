import { useState } from 'react'

function Dashboard() {

  return (
    <div className="flex items-center justify-center h-screen bg-blue-500"> 
      <Navbar />
      <h1 className="text-white text-4xl font-bold">This is Dashboard</h1> 
    </div>
  )
}

export default Dashboard
