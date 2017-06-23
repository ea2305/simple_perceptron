import React,{Component} from 'react';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';


export default class Results extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		return(
			<div className="flex column frame">
				<label for="grafica-error">Grafica de error</label>
				<div className="flex column frame center">
					<LineChart 
						width={ this.props.windowHeight * 1.2} 
						height={500} data={this.props.dataGraph}
					    margin={ this.props.marginGraph }>

						<XAxis dataKey="iteration"/>
						<YAxis dataKey="ek"/>

						<CartesianGrid strokeDasharray="3 3"/>
						<Tooltip/>
						<Legend />

						<Line type="monotone" dataKey="ek" stroke="#8884d8" activeDot={{r: 8}}/>
						<Line type="monotone" dataKey="W" stroke="#82ca9d" activeDot={{r: 8}}/>

					</LineChart>
				</div>
				<div className="">
					<label for="output-system">Salida del sistema</label>
					<Table
						height={'300px'}
						fixedHeader={true}
						selectable={true}>
						<TableHeader>
							<TableRow>
								<TableHeaderColumn tooltip="Iteración">Iteración</TableHeaderColumn>
								<TableHeaderColumn tooltip="ek">e</TableHeaderColumn>
								<TableHeaderColumn tooltip="W">W</TableHeaderColumn>
							</TableRow>
						</TableHeader>
						<TableBody>

						{
						this.props.tableData.map( (row, index) => (
							<TableRow key={index} selected={row.selected}>
								<TableRowColumn>{row.iteration}</TableRowColumn>
								<TableRowColumn>{row.ek}</TableRowColumn>
								<TableRowColumn>{row.W.toString()}</TableRowColumn>
							</TableRow>
						))
						}

						</TableBody>
					</Table>
				</div>

			</div>
		);
	}

}