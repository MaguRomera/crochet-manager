import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Stock() {
  const [hilados, setHilados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("stock")) || [];
    setHilados(data);
  }, []);

  return (
    <div>
      <h2>MI STOCK</h2>
      <button onClick={() => navigate("/nuevo-hilado")}>+</button>
      <div className="tarjetas">
        {hilados.map((h, index) => (
          <div key={index} className="tarjeta" onClick={() => navigate(`/detalle/${index}`)}>
            <p>{h.material}</p>
            <p>{h.color}</p>
            <p>{h.cantidad}gr</p>
          </div>
        ))}
      </div>
    </div>
  );
}