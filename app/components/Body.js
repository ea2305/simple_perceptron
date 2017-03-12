//Importacion de vista con React
import React,{Component} from 'react';

//Importacion de componentes de libreria
import Snackbar from 'material-ui/Snackbar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

//Componentes 
import SideBar from './SideBar';
import Header  from './Header';
import Content from './Content';


//JS libraries
import Perceptron from '../Libs/Perceptron'

export default class Body extends React.Component{
	
	constructor(props) {
		super(props);

		this.state = {
			title     : "Actividad perceptrón (AND y OR)",
			moreInfo : false,
			windowHeight : 0,
			mode : 1,
			side_open : false,
			Tol       : 0.01,
			tetha     : 1,
			N         : 0.01,
			X         : [
				[ 0 , 0 ],
				[ 1 , 0 ],
				[ 0 , 1 ],
				[ 1 , 1 ]
			],
			W : "0.1,0.1",
			dataGraph : [],
			tableData : [],
			marginGraph : {
				top: 5,
				right: 30,
				left: 20,
				bottom: 5
			},
			outputMode : {
				or : [0,1,1,1],
				and : [0,0,0,1]
			}
			
		};
	}

	componentWillMount = () => {
		console.log('component will mount' , window.innerHeight);
		this.setState({
			windowHeight : window.innerHeight
		});
	}

	componentDidMount = () => {
		window.addEventListener("resize", this.updateDimensions);
	};

	handleToggle = () => {
		this.setState({side_open: !this.state.side_open});
	}

	handleClose = () => {
		this.setState({side_open: false});
	}

	changeView = () => {
		//Cambio de estado
		this.handleClose()
	}

	changeMode = ( event, index, value ) => {
		this.setState({mode : value});
	}
	changeField = ( event , newValue ) => {
		console.log( event.currentTarget.name );
		this.setState({
			[event.currentTarget.name] : newValue
		})
	}

	startExample = () => {
		let _ = this.state;
		if(! this.validateField( _.W ) ){
			this.setState({showAlert : true});
			return;
		}

		let Y = ( _.mode == 1 )? 
			_.outputMode.or : _.outputMode.and;
		let W = _.W.split(',').map( (e) => { return parseFloat(e) } );

		let perceptron = new Perceptron( 
			_.N ,
		  	Y ,
		  	_.tetha ,
		  	_.Tol,
		  	_.X ,
		  	W
		);
		let data = perceptron.getW();
		this.setState({
			moreInfo : true,
			tableData : data,
			dataGraph : data
		});
	}

	validateField( data ){
		//Verificacion de longitud
		let w = data.split(',');
		if( w.length != 2 ) return false;
		let regex = /^\d+(\.\d{1,14})?$/i;

		for (var i = 0; i < w.length; i++) {
			if(! regex.test( w[i] ))
				return false;
		}
		return true;
	}

	render(){

		//Reemplazamos los states
		let state = this.state;
		let outputMode = ( state.mode == 1 )? 
			state.outputMode.or : state.outputMode.and;

		return (
			<div>
				<Snackbar
					open={state.showAlert}
					message="Error al parsear los datos, verifique los campos."
					autoHideDuration={4000}
					onRequestClose={() => { this.setState({showAlert:false}) }}/>
				<Header 
					title={state.title}
					handleToggle={this.handleToggle}/>

				<SideBar 
					side_open={state.side_open}
					handleToggle={this.handleToggle}
					handleClose={this.handleClose}
					changeView={this.changeView}/>

				<Content 
					mode={state.mode}
					Tol={state.Tol}
					tetha={state.tetha}
					N={state.N}
					W={state.W}
					moreInfo={state.moreInfo}
					tableData={state.tableData}
					windowHeight={state.windowHeight}
					changeField={this.changeField}
					changeMode={this.changeMode}
					startExample={this.startExample}
					dataGraph={state.dataGraph}
					marginGraph={state.marginGraph}/>
			
			</div>

		)
	}
}