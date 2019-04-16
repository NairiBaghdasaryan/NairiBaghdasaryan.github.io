import React  from 'react';
import avatar from '../image/avatar.png';

const Landing =() => {

    return (
      
	    	<div className="landing-grid">
        		
        		<div>
        			<img  
        				src = {avatar}
        				alt = "avatar"
        				className = "avatar-img"

        			/>
        		</div>
        		
        		<div className = "banner-text" style = {{paddingTop: '0px', margin: 'auto'}} >
        			
        				<h1> Junior Front - End Developer</h1>
        				<hr/>
        				<p> HTML5 | CSS3 | JavaScript | React | Node.js |
        				    Git | Github | Python3 | PostgreSQL </p>
        			
        				
        					<div className ="soc-links">
		        				{/* Linkedin*/}
		        				<a href = 'https://www.linkedin.com/in/nairi-baghdasaryan-3a299393/' rel = 'noopener noreferrer' target = '_blank'>
		        					<i className = 'fa fa-linkedin-square' aria-hidden = 'true' />
		        				</a>

		        				{/* Github*/}
		        				<a href = 'https://github.com/NairiBaghdasaryan' rel = 'noopener noreferrer' target = '_blank'>
		        					<i className = 'fa fa-github-square' aria-hidden = 'true' />
		        				</a>

		        				{/* Freecodecamp*/}
		        				<a href = 'https://www.hackerrank.com/nairi_baghdasar1' rel = 'noopener noreferrer' target = '_blank'>
		        					<i className = 'fa fa-globe' aria-hidden = 'true' />
		        				</a>

		        				{/* Facebook*/}
		        				<a href = 'https://www.facebook.com/nairi.baghdasaryan' rel = 'noopener noreferrer' target = '_blank'>
		        					<i className = 'fa fa-facebook-square' aria-hidden = 'true' />
		        				</a>
		        			</div>
		        		
	       		</div>		
        </div>
		
    );
  }

export default Landing;