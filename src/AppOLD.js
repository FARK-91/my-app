// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
// import Contador from './components/Contador'
// import Contador from './components/Formulario'
// import Contador from './components/HookForm'
// import Contador from './components/FormCrud'
// import Contador from './components/SimpleCrud'
import Saludo from './components/Props'
// import Avatar from './components/Avatar' POR INVESTIGAR

function App() {
  return (
    // <Contador />
    <Saludo nombre="Renier" />
    // <Avatar urlImagen={author.avatarUrl} /> POR INVESTIGAR
  );
}

export default App;
