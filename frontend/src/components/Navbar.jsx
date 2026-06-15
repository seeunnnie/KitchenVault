import { useState } from 'react'

function Navbar({onViewChange}) {

  // function to handle navigation link clicks, takes in the event and the name of the view to switch to
  const handleNavigation = (e, viewName) => {
    e.preventDefault(); // prevents the default anchor behavior of jumping to the section
    onViewChange(viewName); //changes the view in App.jsx to the one corresponding to the link clicked
  };

  return (
    <nav className = "bg-amber-300 text-zinc-900 p-4 shadow-sm">
      <div className = "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className = "flex items-center justify-between">

          {/* website name */}
          <div className = "text-2xl font-bold tracking-tight cursor-pointer">
            <a href="#home" className = "hover:text-zinc-100" onClick = {(e) => handleNavigation(e, 'dashboard')}>KitchenVault</a>
          </div>

          {/* navigation links */}
          <div className = "hidden md:flex space-x-6 font-semibold">
            <a href="#inventory" className = "hover:text-zinc-100 px-3 py-2 rounded-md font-medium" onClick = {(e) => handleNavigation(e, 'inventory')}>Inventory</a>
            <a href="#recipes" className = "hover:text-zinc-100 px-3 py-2 rounded-md font-medium" onClick = {(e) => handleNavigation(e, 'recipes')}>Recipes</a>
            <a href="#groceries" className = "hover:text-zinc-100 px-3 py-2 rounded-md font-medium" onClick = {(e) => handleNavigation(e, 'groceries')}>Groceries</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

