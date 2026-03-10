import '../styles/style.css'
function Footer(){
    return(
        <nav style={{
            background: "#333", width: "100wv", padding: "20px", borderColor: "black", marginTop: "20px", maxWidth: "2200px", margin: "0 auto", borderWidth: "1px", borderStyle: "groove"
        }}>

            <div style={{ 
                display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"
            }}>
               
                <p style={{color: "white", margin: 0}}>
                    © Direitos reservados por TechSolutions Twitter:@TechSolutions
                </p>

            </div>

        </nav>
    )
}

export default Footer