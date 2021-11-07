import React from "react"
import {Link} from 'react-router-dom'
import imagem from '../img/doguito.svg'
import '../css/componentes/cabecalho.css'
const Cabecalho = ()=>{
    return(
        <header className="cabecalho container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icone">

                </span>
            </div>
            <div className="cabecalho-container">
                <a href="/" className="flex flex--centro">
                    <img className='cabecalho__logo' src={imagem} alt="Logo" />
                    <h1 className="cabecalho__titulo">PerShop</h1>
                </a>
            </div>

            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><Link className="menu-item 
                    menu-item--entrar" to="#">Entrar</Link></li>
                    <li><Link className="menu-item " to="#">Produtos</Link></li>
                    <li><Link className="menu-item " to="/">Blog</Link></li>
                    <li><Link className="menu-item " to="/sobre">Sobre</Link></li>
                
                </ul>
            </nav>
            <div className="menu-cabecalho-background"></div>
        </header>
    )
}

export default Cabecalho;