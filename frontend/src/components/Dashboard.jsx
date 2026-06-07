import { useState } from 'react'
import Recent from './Recent'
import Planner from './Planner'
import Expiring from './Expiring'

function Dashboard() {

  return (
    <div className="min-h-screen bg-zinc-50"> 

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-zinc-900">Dashboard</h1>
          <p className="text-lg text-zinc-900">Here's a quick overview of your kitchen!</p>
          <hr className="border-black mt-5"></hr>
        </div>

        {/* Stack Container */}
        <div className="flex flex-col space-y-6">
          <Recent />
          <Planner />
          <Expiring />
        </div>
      </main>
    </div>
  )
}

export default Dashboard
