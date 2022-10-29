
import "./App.css";
import Header from "./components/header/index.jsx";
import Techs from "./components/techsSection/index.jsx";
import Portfolio from "./components/portfolio/index.jsx";
import Global from "./styles/global";
import DescriptionPortfolio from "./components/mainContent";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Global  />
      <Header />
      <DescriptionPortfolio />
      <Techs />
      <Portfolio />
      <Footer/>
    
    </div>
  );
}

export default App;
