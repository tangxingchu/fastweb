import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container';

require('antd/dist/antd.min.css');
require('./app.css');

var app;

app = document.createElement('div');
app.style.height = '100%';
document.body.appendChild(app);


ReactDOM.render(
	<Container/>,
    app
);