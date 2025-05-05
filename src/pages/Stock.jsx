import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/stock.css"


import { BotonAgregar } from "../components/BotónCrearStock";
import { BotonBorrar } from "../components/DeleteStockButton";

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
        {hilados.map((hilado) => (
          <div key={hilado.id} className="tarjeta" onClick={() => navigate(`/detalle/${hilado.id}`)}>
            <section className="txt-section">
              <h3>{hilado.material.toUpperCase()}</h3>
              <span className="props-hilado">
                <p>{hilado.color}</p>
                <p>{hilado.cantidad}gr</p>
              </span>
            </section>
            <section className="btn-section">
              <BotonBorrar
                setHilados={setHilados} id={hilado.id}
              />
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}