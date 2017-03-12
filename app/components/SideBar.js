//Importacion de vista con React
import React,{Component} from 'react';

//Importacion de componentes de libreria
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';


export default class SideBar extends Component{
	
	constructor(props) {
		super(props);

		this.state = {};
	}

	render(){
		return (
			<Drawer
				docked={ false }
				width={ 200 }
				open={ this.props.side_open }
				onRequestChange={ this.props.changeView }>
				<AppBar title="Opciones" showMenuIconButton={false}/>

				<MenuItem onTouchTap={this.props.changeView}>
					Perceptron AND
				</MenuItem>
				<MenuItem onTouchTap={this.props.changeView}>
					Perceptron OR
				</MenuItem>
				<MenuItem onTouchTap={this.props.changeView}>
					Acerca de
				</MenuItem>

			</Drawer>

		)
	}
}