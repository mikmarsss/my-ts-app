import React from 'react';
import './styles/global.css'
import Header from '../widgets/Header';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/routes';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='content'>
        <Routes>
          {publicRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} Component={Component} />
          )}
        </Routes>
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
