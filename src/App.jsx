import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'

function App() {
  const loading = useSelector(state => state.general.loading)
  const toastState = useSelector(state => state.general.toastState)

  return (
    <main>
      {loading && <div className="fadeMe">
        <div className="loading"></div>
      </div>}
      {toastState.show && <div className={`toast ${toastState.color}`}>{toastState.message}</div>}
      <NavBar />
      <Outlet />
    </main>
  )
}

export default App
