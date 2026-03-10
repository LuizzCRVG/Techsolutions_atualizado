import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../styles/style.css'
function CarouselHome(){
return(
<Carousel autoPlay infiniteLoop showThumbs={false}>
<div>
<img src="https://cdn.prod.website-files.com/6938b9d21c12a3f7f90772ba/69652ea262ab820336d6c020_armazenamento-em-nuvem-2.jpeg"/>
</div>
<div>
<img src="https://minacriativa.com.br/wp-content/uploads/2024/02/ferramentas-de-colaboracao-digital.webp"/>
</div>
<div>
<img src="https://niteo.com.br/blog/wp-content/uploads/2023/07/ia-generativa.jpg"/>
</div>
</Carousel>
)
}
export default CarouselHome