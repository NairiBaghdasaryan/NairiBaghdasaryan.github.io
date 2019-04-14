import React  from 'react';

const Landing =() => {

    return (
      
	    	<div className="landing-grid">
        		
        		<div>
        			<img  
        				src = "https://cdn.pixabay.com/photo/2013/07/13/11/34/owl-158414_960_720.png"
        				alt = "avater"
        				className = "avatar-img"

        			/>
        		</div>
        		
        		<div className = "banner-text" style = {{paddingTop: '0px', margin: 'auto'}} >
        			
        				<h1> Full stack Developer</h1>
        				<hr/>
        				<p> HTML5 | CSS3 | JavaScript | React | Node.js |
        				    Git | Github | Python3 | PostgreSQL </p>
        			
        				<div style = {{justifyContent: 'center',display: 'block'}}>
        					<div className ="soc-links">
		        				{/* Linkedin*/}
		        				<a href = 'http://google.com' rel = 'noopener noreferrer' target = '_blank'>
		        					<i className = 'fa fa-linkedin-square' aria-hidden = 'true' />
		        				</a>

		        				{/* Github*/}
		        				<a href = 'http://google.com' rel = 'noopener noreferrer' target = '_blank'>
		        					<i className = 'fa fa-github-square' aria-hidden = 'true' />
		        				</a>

		        				{/* Freecodecamp*/}
		        				<a href = 'http://google.com' rel = 'noopener noreferrer' target = '_blank'>
		        					<i className = 'fa fa-free-code-camp' aria-hidden = 'true' />
		        				</a>

		        				{/* Facebook*/}
		        				<a href = 'http://google.com' rel = 'noopener noreferrer' target = '_blank'>
		        					<i className = 'fa fa-facebook-square' aria-hidden = 'true' />
		        				</a>
		        			</div>
		        		</div>
	       		</div>		
        </div>
		
    );
  }

export default Landing;