import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import store from './store/store'
import { Provider } from 'react-redux'
import App from "./App"
import Course from './modules/course/Course';
import Departments from './modules/department/Departments';
import Professors from './modules/professor/Professors';
import Allocations from './modules/allocation/Allocation';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="cursos" element={<Course />} />
            <Route path="professores" element={<Professors />} />
            <Route path="alocacoes" element={<Allocations/>} />
            <Route path="departamentos" element={<Departments />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
