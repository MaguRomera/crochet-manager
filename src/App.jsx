import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import { Stock } from './pages/Stock';

import './App.css'

function App() {
  
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/stock" element={<Stock/>} /> 
    </Routes>
  )

}

export default App
