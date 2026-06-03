import { useState } from 'react'

function Recipes() {
  return (
    <div className="min-h-screen bg-zinc-50"> 

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-zinc-900">Recipes</h1>
          <p className="text-lg mt-2 text-zinc-900">Find recipes based on your inventory!</p>
        </div>

        {/* Stack Container */}
        <div className="flex flex-col space-y-6">
          {/* Recipe content goes here */}
        </div>
      </main>
    </div>
  )
}

export default Recipes
