import deleteicon from "../assets/trash.svg"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function BotonBorrar({ id, setHilados }) {
    const borrarHilado = (e) => {
        e.stopPropagation();
    
        const confirmacion = window.confirm("¿Seguro que querés borrar este hilado?");
        if (!confirmacion) return;
    
        const stockActual = JSON.parse(localStorage.getItem("stock")) || [];
        const nuevoStock = stockActual.filter((h) => String(h.id) !== String(id));
    
        localStorage.setItem("stock", JSON.stringify(nuevoStock));
        setHilados(nuevoStock);
      };
  
    return (
        <button 
            title="Borrar hilado"
            onClick={(e) => borrarHilado(e)}
            className="btn-tarjeta">
            <img 
                src={deleteicon} 
                className="btn-tarjeta-icon" 
                alt="Eliminar hilado"
            />
        </button>
    );
  }