import React,{Component} from 'react';
import {render} from 'react-dom';

const target = document.getElementById( 'app' );

class App extends Component{
	render(){
		console.log('ok')
		return <h1>Hola mundo</h1>;
	}
}

render( <App /> , target );