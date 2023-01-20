import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from './pages/Home'
import Especificacoes from './pages/Especificacoes'
import Fotos from './pages/Fotos'
import Multimidia from './pages/Multimidia'
import FaleConosco from './pages/FaleConosco'
import Navbar from './layout/Navbar'
import Interface from './layout/Interface'
import Cabecalho from './layout/Cabecalho'
import Footer from './layout/Footer'
import React from 'react'

function Main() {
    return (
        <div>
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
    )
}

export default Main