import {Link} from 'react-router-dom'
import '../styles/style.css'
function Menu(){
    return(
        <nav style={{background: "white", padding:"10px", width:"100wv", borderWidth:"1px", borderColor:"black",borderStyle:"groove", marginBottom:"20px", maxWidth:"2200px", margin:"0 auto"}}>
            <titulo style={{marginRight:"2vw", color:"blue"}}>TechSolutions</titulo>
            <Link style={{color:"black", marginRight:"3vw", fontSize:"0.6em"}} to={"/"}>Home</Link>
            <Link style={{color:"black", marginRight:"3vw", fontSize:"0.6em"}} to={"/produtos"}>Produtos</Link>
            <Link style={{color:"black", marginRight:"3vw", fontSize:"0.6em"}} to={"/empresa"}>Empresa</Link>
            <Link style={{color:"black", marginRight:"3vw", fontSize:"0.6em"}} to={"/contato"}>Contatos</Link>
        </nav>
    )

}
export default Menu