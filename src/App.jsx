import './App.css';
import But from 'bootstrap/dist/css/bootstrap.css'
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/Title';
import React from 'react';
import Layout from './components/Layout/Layout';
import NotFound from './components/Pages/NotFound';

import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"
    style={{backgroundColor: "black", minHeight:
    "100vh"}}
    > 
  <Title label="Tienda de Rollers Argentina"/>
      <NavBar/>
    <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/home" element={<ItemListContainer />} />
          <Route path="/:category" element={<ItemListContainer />} />
     
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </Layout>
    </div>

    
    
  );
}

export default App;
