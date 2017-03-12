/**
 * Visualizacion de componentes para cuerpo de vista
 * colaboradores :
 * 		Elihu A. Cruz Albores
 * 		Victor F. Gil Calderon
 * version 0.1.0
 */

//React elements
import React,{Component} from 'react';

//Librerias de react
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';

//Componentes personales
import Results from './Results';

//Objeto de estilos en linea
const styles = {
	sizeCard : {
		'width':'90%',
		'margin' : '5%'
	}
}

//Clase para renderizado de componente
export default class Content extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		
		return(
			<Card style={ styles.sizeCard }>

				<CardHeader
					title="Resultados de algoritmo"
  					subtitle="Graficación"/>

				<section className="flex column frame">
					
					<div className="flex row center">

						<div className="flex column frame-h">

							<label for="mode">Tipo de perceptron</label>
							<SelectField
								floatingLabelText="Perceptron"
								value={this.props.mode}
								onChange={this.props.changeMode}>

								<MenuItem value={1} primaryText="OR" />
								<MenuItem value={2} primaryText="AND" />

							</SelectField>
						</div>
						<div className="flex column frame-h">
							<label for="tolerancia">Tolerancia</label>
							<TextField
						      hintText="Tolerancia"
						      value={this.props.Tol}
						      name="Tol"
						      onChange={this.props.changeField}
						      floatingLabelText="Toleracia"/><br />
						</div>
						<div className="flex column frame-h">
							<label for="proporcionalidad">Constante de proporcionalidad</label>
							<TextField
						      hintText="proporcionalidad"
						      value={this.props.N}
						      name="N"
						      onChange={this.props.changeField}
						      floatingLabelText="Proporcionalidad"/><br />	
						</div>

					</div>

					<div className="flex row center">

						<div className="flex column frame-h">
							<label for="w">Pesos iniciales</label>
							<TextField
						      hintText="Pesos inicials"
						      value={this.props.W}
						      name="W"
						      onChange={this.props.changeField}
						      floatingLabelText="W"/><br />
						</div>
						<div className="flex column frame-h">
							<label for="tetha">Tetha</label>
							<TextField
						      hintText="Valor de tetha"
						      value={this.props.tetha}
						      name="tetha"
						      onChange={this.props.changeField}
						      floatingLabelText="Tetha"/><br />
						</div>
						<div className="flex column frame-h level">
							<RaisedButton 
								label="Start"
								onClick={this.props.startExample}/>
						</div>

					</div>

					<List>
					    <ListItem
							primaryText="Mostrar Procedimiento"
							initiallyOpen={false}
							open={this.props.moreInfo}
							nestedItems={[
								<Results 
									windowHeight={this.props.windowHeight}
									dataGraph={this.props.dataGraph}
									tableData={this.props.tableData}
									marginGraph={this.props.marginGraph}/>
							]}/>
					</List>

				</section>

			</Card>
		);
	}

}