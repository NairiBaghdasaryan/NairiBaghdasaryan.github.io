import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component {
	render() {
		return (
				<Grid >
					<Cell col = {4}>
					    <p style = {{fontSize:'1.2em'}}>{this.props.sYear} - {this.props.eYear}</p>
					</Cell>

					<Cell col = {8}>
						<h5 style = {{marginTop: '0px', fontSize:'1.2em', fontFamily: 'Jua'}}>Company: {this.props.compName}</h5> 
						<p style = {{fontSize:'1.1em'}}>Position: {this.props.jpos}</p> 
						<p style = {{fontSize:'1.1em'}}>Description: {this.props.jdesc}</p> 
					</Cell>

				</Grid>

		);
	}
}

export default Experience;