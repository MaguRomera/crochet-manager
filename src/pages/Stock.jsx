import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/stock.css"

import { BotonAgregar } from "../components/BotónCrearStock";

export function Stock() {
  const [hilados, setHilados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("stock")) || [];
    setHilados(data);
  }, []);

  return (
    <div>
      <header className="menu">
        <h2>MI STOCK</h2>
        <BotonAgregar/>
      </header>
      <div className="tarjetas">
        {hilados.map((h, index) => (
          <div key={index} className="tarjeta" onClick={() => navigate(`/detalle/${index}`)}>
            <h3>{h.material.toUpperCase()}</h3>
            <span className="props-hilado">
              <p>{h.color}</p>
              <p>{h.cantidad}gr</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}