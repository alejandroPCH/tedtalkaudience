// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import NewBadge from './pages/NewBadge'



const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(<Badge />, container);

ReactDOM.render(<NewBadge/>,container)