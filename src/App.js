import React from 'react';

import './styles.css'

// Quando o componente eh uma pasta com arquivo index, nao precisa indicar o arquivo. index eh o default (esperado).
import Header from './components/Header';
// import Main from './pages/Main'
import Routes from './routes'

/*
  Posso trocar 
  { return ...} 
  por
  (
    ...
  )
  sempre que o return for executado na primeira linha.
*/
const App = () => (
  <div className="App">
    <Header />
    {/* <Main /> */}
    <Routes />
  </div>
);

export default App;
