//Importacion de componentes con react
import React,{Component} from 'react';

//Importacion de componentes M UI
import AppBar from 'material-ui/AppBar';

export default class Header extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){

		return(
			<AppBar 
					title={this.props.title} 
					onLeftIconButtonTouchTap={this.props.handleToggle} />
		)

	}

}