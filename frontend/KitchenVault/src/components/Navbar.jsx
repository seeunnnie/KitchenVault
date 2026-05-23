import { useState } from 'react'

function Navbar() {

  return (
    <nav className = "bg-amber-300 text-black p-4 shadow-sm">
      <div className = "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className = "flex items-center justify-between">

          {/* website name */}
          <div className = "text-2xl font-bold tracking-tight cursor-pointer">
            <a href="#home" className = "hover:text-zinc-100">KitchenVault</a>
          </div>

          {/* navigation links */}
          <div className = "hidden md:flex space-x-6 font-semibold">
            <a href="#inventory" className = "hover:text-zinc-100 px-3 py-2 rounded-md font-medium">Inventory</a>
            <a href="#recipes" className = "hover:text-zinc-100 px-3 py-2 rounded-md font-medium">Recipes</a>
            <a href="#groceries" className = "hover:text-zinc-100 px-3 py-2 rounded-md font-medium">Groceries</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

