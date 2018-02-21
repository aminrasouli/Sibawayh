import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './dists/css/bootstrap.min.css';
import './dists/css/animate.css';

let root = document.createElement('div');
root.id = "root";
document.body.appendChild(root);

render(<App/>, document.getElementById('root'));