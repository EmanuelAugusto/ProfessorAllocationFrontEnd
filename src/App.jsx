import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'

function App() {
  const loading = useSelector(state => state.general.loading)

  return (
    <main>
      {loading && <div className="fadeMe">
        <div className="loading"></div>
      </div>}
      <NavBar />
      <Outlet />
    </main>
  )
}

export default App
