import { useNavigate } from "react-router-dom";

export function BotonAgregar() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/nuevo-hilado")}>
      +
    </button>
  );
}