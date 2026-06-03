import { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard';
import Recipes from './components/Recipes';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  return (
    <div className="app-container">
      <Navbar onViewChange = {setCurrentView}/>

      {currentView === 'dashboard' && <Dashboard />}
      {currentView === 'recipes' && <Recipes />}
    </div>
  )
}

export default App
