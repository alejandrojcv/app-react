import './App.css';
import But from 'bootstrap/dist/css/bootstrap.css'
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/Title';
import Gif from './components/Gif/Gif'
import React from 'react';
function App() {
  return (
    <div className="App"
    style={{backgroundColor: "black", minHeight:
    "100vh"}}
    > 
    <Title label="Tienda de Rollers Argentina"/>
    <NavBar/>
    <ItemListContainer>
      <span style={{color: "yellow"}}>Esto es un elemento hijo</span>
    </ItemListContainer>
    <Gif/>
    </div>
    
  );
}

export default App;
