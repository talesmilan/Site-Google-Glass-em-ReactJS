import './App.css';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from './components/pages/Home'
import Especificacoes from './components/pages/Especificacoes'
import Fotos from './components/pages/Fotos'
import Multimidia from './components/pages/Multimidia'
import FaleConosco from './components/pages/FaleConosco'
import Navbar from './components/layout/Navbar'
import Interface from './components/layout/Interface'
import Cabecalho from './components/layout/Cabecalho'
import Footer from './components/layout/Footer'


function App() {
  return (
    <div className="App">
      <Router>
        <div className="interface">
          <Cabecalho />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/specs" element={<Especificacoes />}/>
            <Route path="/fotos" element={<Fotos />}/>      
            <Route path="/multimidia" element={<Multimidia />}/> 
            <Route path="/fale-conosco" element={<FaleConosco />}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
