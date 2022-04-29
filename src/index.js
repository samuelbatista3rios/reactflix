import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));


function CadastroVideo(){
  return (
    <div>
      pagina de cadastro de video
    </div>
  )
}

const Pagina404 =() => (<div>Página404</div>)

root.render(
  <BrowserRouter>
  <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={Pagina404} />
  </Switch>

  </BrowserRouter>
  
);


