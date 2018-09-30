import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './Styles/style.scss';

import IndecisionApp from './Components/IndecisionApp';


const appRoot = document.querySelector('#UI-app');
ReactDOM.render(<IndecisionApp />, appRoot);