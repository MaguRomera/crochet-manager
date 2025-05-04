import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/nuevohilado.css"
import saveicon from "../assets/floppy-disk.svg"
import Toastify from 'toastify-js'

export default function NuevoHilado() {
  const [color, setColor] = useState("Rojo");
  const [cantidad, setCantidad] = useState("");
  const [material, setMaterial] = useState("");
  const [grosor, setGrosor] = useState("Fino");
  const [precio, setPrecio] = useState("");
  const navigate = useNavigate();

  const guardarHilado = (e) => {
    e.preventDefault();
  
    if (!material.trim()) {
      Toastify({
        text: "El material no puede estar vacío.",
        duration: 2000,
        close: true,
      })
      return;
    }
  
    if (cantidad < 1 || cantidad > 10000) {
      Toastify({
        text: "La cantidad debe estar entre 1 y 10000 gramos.",
        duration: 2000,
        close: true,
      })
      return;
    }
  
    if (precio < 1 || precio > 1000000) {
      Toastify({
        text: "El precio debe estar entre 1 y 1000000 ARS.",
        duration: 2000,
        close: true,
      })
      return;
    }
  
    const nuevo = { color, cantidad, material, grosor, precio };
    const stock = JSON.parse(localStorage.getItem("stock")) || [];
    stock.push(nuevo);
    localStorage.setItem("stock", JSON.stringify(stock));
    navigate("/stock");
  };

  return (
    <div className="prnp-cnt">
      <h2>NUEVO HILADO</h2>
      
      <form className="inputs-cnt" onSubmit={guardarHilado}>
        <span className="textinput-cnt">
          <label>Material</label>
          <input
            placeholder="Ingrese el tipo de material..."
            value={material}
            onChange={e => setMaterial(e.target.value)}
            required
          />
        </span>

        <span className="select-cnt">
          <label>Color</label>
          <select value={color} onChange={e => setColor(e.target.value)} required>
            <option>Rojo</option>
            <option>Azul</option>
            <option>Amarillo</option>
            <option>Verde</option>
            <option>Naranja</option>
            <option>Violeta</option>
            <option>Blanco</option>
            <option>Negro</option>
          </select>
        </span>

        <span className="select-cnt">
          <label>Grosor</label>
          <select value={grosor} onChange={e => setGrosor(e.target.value)}>
            <option>Fino</option>
            <option>Semigrueso</option>
            <option>Grueso</option>
            <option>Fingering</option>
          </select>
        </span>

        <span className="number-cnt">
          <label>Cantidad(grs)</label>
          <input
            type="number"
            placeholder="Ingrese la cantidad..."
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
            min={1}
            max={10000}
            required
          />
        </span>

        <span className="number-cnt">
          <label>Precio(ARS)</label>
          <input
            type="number"
            placeholder="Ingrese el precio..."
            value={precio}
            onChange={e => setPrecio(Number(e.target.value))}
            min={1}
            max={100000}
            required
          />
        </span>

        <button 
        type="submit"
        className="save-btn" title="Guardar">
          <img src={saveicon} className="save-btn-icon" />
          Guardar
        </button>

      </form>
      
    </div>
  );
}