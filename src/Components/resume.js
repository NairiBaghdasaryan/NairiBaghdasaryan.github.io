import React from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';


const Resume = () => {

    return (
      	<div>
	    	<Grid className= 'resume-grid'>
      			
      			<Cell col = {4} className='resume-left'> 
      				<div>
      					<img style = {{ height: '200px', paddingTop: '0px'}} src = 'https://www.domstamand.com/wp-content/uploads/2016/12/avatar1.jpg'
      					alt = 'avatar1'
      					/>
   					</div>

      				<h3 style = {{paddingTop:'1em',color:'grey'}}> Nairi Baghdasaryan</h3>
      				<h5 style ={{color:'black'}}>Junior Full Stack Developer </h5>
      				<hr style ={{borderTop:'3px solid black', width: '70%'}} />
      				<h5  style ={{color:'grey'}}> Address </h5>
      				<p> 53 app, al. Niepodlegloschi 71, 02-626,<br/> Warsaw, Poland </p>

      			</Cell>
      			
      			<Cell col = {8} className='resume-rigth' style={{borderRadius: '20px'}}>  
      				<h3>Education</h3> 
      				
      				<Education
      				sYear = {2008}
      				eYear = {2012}
      				uName = 'Yerevan State University'
      				stName = 'Department of Physics'
      				sDegree = 'Bachelors Degree'
      				/>

      				<Education
      				sYear = {2012}
      				eYear = {2014}
      				uName = 'Yerevan State University'
      				stName = 'Department of Reactor Physics'
      				sDegree = 'Master Degree'
      				/>

      				<Education
      				sYear = {2014}
      				eYear = {2017}
      				uName = 'Yerevan State University'
      				stName = 'Department of Nuclear Engineering'
      				sDegree = 'PhD Degree'
      				/>

      				<Education
      				sYear = {2018}
      				eYear = 'currently'
      				uName = 'National Center of Nuclear Research'
      				stName = 'Nuclear Fuel Performance'
      				sDegree = 'PhD study'
      				/>

      				<h3>Experience</h3> 

      				<Experience
      				sYear = {2012}
      				eYear = {2018}
      				compName = 'Nuclear and Radiation Safety Center'
      				jpos = 'Specialist on neutronic analysis and nuclear fuel'
      				jdesc = 'Perform Criticality Safety Analysis of Nuclear Fuel'
      				/>

      				<h3>Skills</h3> 

      				<Skills
      				skill = 'HTML5/CSS3'
      				progress = {80}
      				/>

      				<Skills
      				skill = 'JavaScript'
      				progress = {48}
      				/>

      				<Skills
      				skill = 'React'
      				progress = {40}
      				/>

                              <Skills
                              skill = 'PostgreSQL'
                              progress = {20}
                              />

                              <Skills
                              skill = 'Node'
                              progress = {30}
                              />

                              <Skills
                              skill = 'Python'
                              progress = {40}
                              />

                              <Skills
                              skill = 'Git'
                              progress = {50}
                              />

                              <Skills
                              skill = 'Github'
                              progress = {60}
                              />

      				<h3>Languages</h3> 
      				{/*<Languages/>*/}
                              <Skills
                              skill = 'Armenian'
                              progress = {100}
                              />
                              <Skills
                              skill = 'English'
                              progress = {70}
                              />
                              <Skills
                              skill = 'Russian'
                              progress = {50}
                              />
                              <Skills
                              skill = 'Polish'
                              progress = {30}
                              />

      			</Cell>

      		</Grid>
		</div>
    );
  }

export default Resume;