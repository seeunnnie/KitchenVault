import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Recipes from "./components/Recipes";
import Groceries from "./components/Groceries";

function App() {
  const [currentView, setCurrentView] = useState("dashboard");
  return (
    <div className="app-container">
      <Navbar onViewChange={setCurrentView} />

      {currentView === "dashboard" && <Dashboard />}
      {currentView === "inventory" && <Inventory />}
      {currentView === "recipes" && <Recipes />}
      {currentView === "groceries" && <Groceries />}
    </div>
  );
}

export default App;
