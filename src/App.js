import styled from 'styled-components';
import dadosIniciais from './data/dados_iniciais.json';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


const AppWrapper = styled.div`
background:var(--grayDark);
`;
function App() {
  return (
    
         <AppWrapper>
      <Menu />
     

      <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"Campanha Global da Motorola gravada no mês de janeiro de 2022 na cidade de São Paulo-SP"}
      />
      
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[2]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[3]}
      />
      
      
    
      <Footer />
    </AppWrapper>
    
   
   
  );
}

export default App;
