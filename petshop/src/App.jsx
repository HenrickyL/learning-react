import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home.jsx'
import Sub from './paginas/Sub.jsx'
import Cabecalho from './assets/components/Cabecalho.jsx'
import Sobre from './paginas/Sobre.jsx'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
            <Home/>

        </Route>

        <Route exact path="/sobre">
          <Sobre />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
