import { useState } from 'react'

function Expiring() {

  return (
    <div className="min-h-auto rounded-xl shadow-lg bg-zinc-50 border-2 border-black overflow-hidden"> 
        <div className="px-6 py-4 border-b border-zinc-200 flex items-center justify-between">
            <h2 className="text-2xl font-semibold mt-2">Expiring Soon</h2>  
            <button className="px-4 py-2 bg-amber-300 text-zinc-900 font-medium rounded hover:bg-amber-500 hover:text-zinc-50 transition duration-200 shadow-sm">View All</button>
        </div>
        <div className="px-6 py-4 text-zinc-900 text-lg/10">
            <p>Today: Milk, Sourdough Bread</p>
            <p>Tomorrow: Nothing</p>
            <p>In 2 Days: Chicken Thighs</p>
        </div>
    </div>
  )
}

export default Expiring