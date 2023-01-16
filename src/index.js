import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AdviceGenerator  } from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <section className='App'>
    <AdviceGenerator />
  </section>
);