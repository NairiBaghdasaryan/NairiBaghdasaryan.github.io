import React from 'react';
import {Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';
import avatar1 from '../image/avatar1.jpg';

const Contact =() => {
    return (
      	
      		<Grid className= 'contact-grid'>
      			<Cell col = {6}> 
      				<h2>Name Surname</h2>
      				<img style = {{ height: '250px', paddingTop: '0px', margin: 'auto'}} src = {avatar1}
      					alt = 'avatar1'
      				/>
      				<h6 style = {{ margin: 'auto', fontSize: '20px'}}> I am a Junior Full Stack Developer.<br/>
      				 Please contact me if you are interested to cooperate!!!</h6>
      			</Cell>
      			<Cell col = {6}>  
      				<h2>Contact Me</h2> 
      				<hr/>
      				<div className='contact-list'>
	      				<List style= {{paddingTop:'2em'}}>
							  <ListItem >
							    <ListItemContent style={{fontSize: '20px', paddingLeft: '3em'}}>
							    	<i className="fa fa-phone-square" aria-hidden='true'/> (+48) 000 909000
							    </ListItemContent>
							  </ListItem>

							  <ListItem>
							    <ListItemContent style={{fontSize: '20px', paddingLeft: '3em'}}>
							    	<i className="fa fa-envelope" aria-hidden='true'/> name.example@gmail.com
							    </ListItemContent>
							  </ListItem>

							  <ListItem>
							   <ListItemContent 
							    	style={{fontSize: '20px', paddingLeft: '3em'}}>
							    	<i className="fa fa-skype" aria-hidden='true'/> name.example
							    </ListItemContent>
							  </ListItem>
						</List>
					</div>
      			</Cell>
      			
      		</Grid>
	 
    );
  }

export default Contact;