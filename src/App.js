import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Services from "./components/Servises/Servises";
import './components/scss/style.scss'
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Portfolio from "./components/Portfolio/Portfolio";
import Advantages from "./components/Advantages/Advantages";

function App() {
  
  return (
    <>
     <Header/>
     <AboutCompany/>
     <Portfolio/>
     <Services/>
     <Advantages/>
     <Footer/>
     
    </>
  );
}

export default App;
