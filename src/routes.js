import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main';
import Product from './pages/Product'

const Routes = () => (
    // BrowserRouter define que estamos utilizado o Router (rotas) pelo navegador.
    <BrowserRouter>
        {/* Switch permite que 1 pagina seja chamada por rota */}
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/product/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;