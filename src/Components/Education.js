import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component {
	render() {
		return (
				<div>
				<Grid>
					<Cell col = {4}>
					    <p style = {{fontSize:'1.2em'}}>{this.props.sYear} - {this.props.eYear}</p>
					</Cell>

					<Cell col = {8}>
						<h5 style = {{marginTop: '0px', fontSize:'1.2em', fontFamily: 'Jua'}}> {this.props.uName}</h5> 
						<p style = {{fontSize:'1.1em'}}>{this.props.stName}</p> 
						<p style = {{fontSize:'1.1em'}}>{this.props.stName}</p> 
						<p style = {{fontSize:'1.1em'}}>{this.props.sDegree}</p>
						<hr style ={{borderTop:'3px solid black', width: '100%', margin:'0px'}} />
					</Cell>

				</Grid>
				</div>
		);
	}
}

export default Education;