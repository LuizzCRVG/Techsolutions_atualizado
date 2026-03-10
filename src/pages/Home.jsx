import CarouselHome from "../components/Carousel"
import Card from "../components/Card"
import '../styles/style.css'
function Home(){
return(
<div className="container">
<CarouselHome/>
<h2>Informações</h2>
<div className="grid">
<Card titulo="Consultoria em transformação digital" texto="Avaliação dos processos da empresa e orientação para adoção de tecnologias que melhorem eficiência e produtividade." imagem="https://storage.googleapis.com/digitro-site-dgt/wp-content/uploads/2025/12/o-que-e-transformacao-digital.webp"/>
<Card titulo="Implantação de sistemas ERP" texto="Instalação, configuração e adaptação de sistemas ERP às necessidades da empresa." imagem="https://euax.com.br/wp-content/uploads/2021/04/pilares-implantacao-de-sistemas-1024x657.webp"/>
<Card titulo="Implantação de sistemas CRM" texto="Configuração e integração do CRM com os processos de vendas e atendimento da empresa." imagem="https://www.sunzinet.com/hs-fs/hubfs/CRM-implementation%20process.png?width=1992&height=2000&name=CRM-implementation%20process.png"/>
<Card titulo="Treinamento de equipes em ferramentas digitais" texto="Capacitação presencial para funcionários utilizarem sistemas corporativos e plataformas tecnológicas." imagem="https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2023/05/positivoinformatica_positivotecnologia_image_845.jpeg"/>
<Card titulo="Auditoria de infraestrutura de TI" texto="Análise da infraestrutura tecnológica da empresa para identificar problemas, riscos e melhorias." imagem="https://flowti.com.br/storage/blog/122312202512186943f230aef65.png"/>
<Card titulo="Planejamento de arquitetura em nuvem" texto="Definição da melhor estrutura de cloud para armazenamento, segurança e escalabilidade dos sistemas." imagem="https://www.ipsense.com.br/wp-content/uploads/2019/12/313583-quando-investir-em-arquitetura-para-projetos-de-cloud-computing.jpg"/>
<Card titulo="Integração de sistemas empresariais" texto="Conexão entre diferentes softwares utilizados pela empresa para garantir fluxo de dados eficiente." imagem="https://4success.com.br/wp-content/uploads/2019/11/226930-24_09_2018_19_51_26_903996854.jpg"/>
<Card titulo="Implantação de políticas de segurança da informação" texto="Criação e implementação de normas e práticas para proteger dados corporativos." imagem="https://gaea.com.br/wp-content/uploads/2017/02/66572-entenda-o-que-e-a-politica-de-seguranca-da-informacao.jpg"/>
<Card titulo="Suporte técnico corporativo presencial" texto="Atendimento técnico direto na empresa para manutenção de sistemas e equipamentos." imagem="https://hitechsolucoes.com.br/wp-content/uploads/2023/10/suporte-tecnico-corporativo-1024x733.webp"/>
<Card titulo="Treinamento em uso de inteligência artificial" texto="Capacitação de equipes para aplicar ferramentas de IA em processos de trabalho." imagem="https://scaffoldeducation.com.br/wp-content/uploads/2023/08/internet-networking-and-digital-transformation-wi-2022-12-31-04-26-07-utc-1.jpg"/>
<Card titulo="Análise e otimização de processos empresariais" texto="Estudo das rotinas da empresa para identificar gargalos e propor melhorias tecnológicas." imagem="https://isoflex.com.br/wp-content/uploads/2024/02/otimizacao-de-processos-na-empresa-como-implementar.jpg"/>
<Card titulo="Workshops de inovação e tecnologia" texto="Eventos e treinamentos presenciais para apresentar novas tecnologias e tendências ao time da empresa." imagem="https://pr.agenciasebrae.com.br/wp-content/uploads/sites/16/2025/06/6997-Imagen-1-ConectaPR-2024.jpg"/>
</div>
</div>
)
}
export default Home