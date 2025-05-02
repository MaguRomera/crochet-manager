import { NavButton } from "../components/NavButton"
import "../styles/home.css"

export default function Home(){
    return(
        <div className="father-cnt">
            <h1>
                CROCHET MANAGER
            </h1>
            <section className="nav-bar">
                <NavButton
                    pagename="STOCK" 
                    navlink="/stock"
                />
            </section>
        </div>
    )
}