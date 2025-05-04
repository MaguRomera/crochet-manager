import { useNavigate } from "react-router-dom";
import addicon from "../assets/plus-circle.svg"

export function BotonAgregar() {
  const navigate = useNavigate();
  return (
      <img 
        onClick={() => navigate("/nuevo-hilado")}
        src={addicon} 
        title="Agregar hilado"
        className="add-btn" 
      />
  );
}