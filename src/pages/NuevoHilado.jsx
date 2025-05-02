import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NuevoHilado() {
  const [color, setColor] = useState("Rojo");
  const [cantidad, setCantidad] = useState("");
  const [material, setMaterial] = useState("");
  const [grosor, setGrosor] = useState("Fino");
  const [precio, setPrecio] = useState("");
  const navigate = useNavigate();

  const guardarHilado = () => {
    const nuevo = { color, cantidad, material, grosor, precio };
    const stock = JSON.parse(localStorage.getItem("stock")) || [];
    stock.push(nuevo);
    localStorage.setItem("stock", JSON.stringify(stock));
    navigate("/stock");
  };

  return (
    <div>
      <h2>Nuevo Hilado</h2>

      <input
        placeholder="Material"
        value={material}
        onChange={e => setMaterial(e.target.value)}
        required
      />

      <select value={color} onChange={e => setColor(e.target.value)} required>
        <option>Rojo</option>
        <option>Azul</option>
        <option>Amarillo</option>
        <option>Verde</option>
        <option>Naranja</option>
        <option>Violeta</option>
      </select>

      <input
        type="number"
        placeholder="Cantidad (gr)"
        value={cantidad}
        onChange={e => setCantidad(Number(e.target.value))}
        min={1}
        max={10000}
        required
      />

      <select value={grosor} onChange={e => setGrosor(e.target.value)}>
        <option>Fino</option>
        <option>Semigrueso</option>
        <option>Grueso</option>
        <option>Fingering</option>
      </select>

      <input
        type="number"
        placeholder="Precio (ARS)"
        value={precio}
        onChange={e => setPrecio(Number(e.target.value))}
        min={1}
        max={100000}
        required
      />

      <button onClick={guardarHilado}>Guardar</button>
    </div>
  );
}