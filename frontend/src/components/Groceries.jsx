import { useState } from 'react'

function Groceries() {
  return (
    <div className="min-h-screen bg-zinc-50"> 

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-zinc-900">Groceries</h1>
          <button className="px-4 py-2 bg-amber-300 text-zinc-900 font-medium rounded hover:bg-amber-500 hover:text-zinc-50 transition duration-200 shadow-sm">
            <span>&#10133;</span> Create Grocery List
          </button>
        </div>
          <hr className="border-black mt-5"></hr>

      </main>
    </div>
  )
}

export default Groceries
