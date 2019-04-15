import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
	render() {
		return (
				<Grid>
					<Cell col = {4}>
						<div><p style = {{margin: '0px', fontSize:'1.2em'}}>{this.props.skill}</p></div>
					</Cell>
					<Cell col = {8}>
						<div> <ProgressBar 
							style = {{margin: 'auto', width:'100%'}} progress = {this.props.progress} />
						</div>
					</Cell>

				</Grid>

		);
	}
}

export default Skills;