function Card({titulo, texto, imagem}){
return(
<div className="card">
<img style={{height:"352px", width:"352px", borderRadius:"20px"}} src={imagem}/>
<h3>{titulo}</h3>
<p>{texto}</p>
</div>
)
}
export default Card
