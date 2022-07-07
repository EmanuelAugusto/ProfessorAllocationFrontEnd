import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  )
}

export default App
