import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import { Stock } from './pages/Stock';
import NuevoHilado from "./pages/NuevoHilado";

import './App.css'

function App() {
  
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/stock" element={<Stock/>} /> 
      <Route path="/nuevo-hilado" element={<NuevoHilado/>} /> 
    </Routes>
  )

}

export default App
