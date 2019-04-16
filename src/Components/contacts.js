import React from 'react';
import {Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';
import avatar1 from '../image/avatar1.jpg';

const Contact =() => {
    return (
      	
      		<Grid className= 'contact-grid'>
      			<Cell col = {6} > 
      				<h2>Nairi Baghdasaryan</h2>
      				<img  style = {{height: '200px', paddingTop: '0px', justifyContent: 'center'}} src = {avatar1}
      					alt = 'avatar1'
      				/>
      				<h6 style = {{ margin: 'auto', fontSize: '20px'}}> I am a Junior Front-End Developer.<br/>
      				 Please contact me if you are interested to cooperate!!!</h6>
      			</Cell>
      			<Cell col = {6}>  
      				<h2>Contact Me</h2> 
      				<hr/>
      				<div className='contact-list'>
	      				<List style= {{paddingTop:'2em'}}>
							  <ListItem >
							    <ListItemContent style={{fontSize: '20px', paddingLeft: '2em'}}>
							    	<i className="fa fa-phone-square" aria-hidden='true'/> (+48)694909984
							    </ListItemContent>
							  </ListItem>

							  <ListItem>
							    <ListItemContent style={{fontSize: '20px', paddingLeft: '2em'}}>
							    	<i className="fa fa-envelope" aria-hidden='true'/> nairi.baghdasaryan@gmail.com
							    </ListItemContent>
							  </ListItem>

							  <ListItem>
							   <ListItemContent 
							    	style={{fontSize: '20px', paddingLeft: '2em'}}>
							    	<i className="fa fa-skype" aria-hidden='true'/> nairi.Baghdasaryan
							    </ListItemContent>
							  </ListItem>
						</List>
					</div>
      			</Cell>
      			
      		</Grid>
	 
    );
  }

export default Contact;