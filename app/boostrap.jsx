//importacion de elementos para React
import React,{Component} from 'react';
import {render} from 'react-dom';

//Importamos temas materialUI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

//Importacion de colores
import {blue900,blue800} from 'material-ui/styles/colors';


//Importacion de componente principal
import Body from './components/Body'

//Elemento para la insercion
const target = document.getElementById( 'app' );

//Definicion de estilo propio
const muiTheme = getMuiTheme({
	palette: {
		primary1Color: "#0D47A1",
		primary2Color: "#2173B3",
		primary3Color: "#A9D2EB",
		accent1Color: "#ED3B3B",
		accent2Color: "#ED2B2B",
		accent3Color: "#F58C8C"
	}
});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (

	<MuiThemeProvider muiTheme={muiTheme}>

		<Body />

	</MuiThemeProvider>

);

render( <App /> , target );