import React from 'react';
import './App.css';
import { Header, Main, Footer } from './components/components';
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <Router>  
      <Header/>
      <Main/>
      <Footer/>
    </Router>
  );
}
