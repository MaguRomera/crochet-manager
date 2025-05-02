import { Navigate, useNavigate } from "react-router-dom";

export function NavButton(props){

    let navigate = useNavigate()
    const handleNavigation = () =>{
        navigate(`${props.navlink}`)
        
    }

    return(
        <button className="NavButton" onClick={handleNavigation}>      
            {props.pagename}
        </button>
    )
}