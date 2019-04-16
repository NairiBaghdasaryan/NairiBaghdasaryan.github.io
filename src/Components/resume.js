import React from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import avatar1 from '../image/avatar1.jpg';


const Resume = () => {

    return (
      	<div>
	    	<Grid className= 'resume-grid'>
      			
      			<Cell col = {4} className='resume-left'> 
      				<div>
      					<img style = {{ height: '200px', paddingTop: '0px'}} src = {avatar1}
      					alt = 'avatar1'
      					/>
   					</div>

      				<h3 style = {{paddingTop:'1em', color:'grey'}}> Nairi Baghdasaryan</h3>
      				<h5 style ={{color:'black'}}>Junior Front-End Developer </h5>
      				<hr style ={{borderTop:'3px solid black', width: '70%'}} />
      				<h5  style ={{color:'grey'}}> Address </h5>
      				<h6>  53, al. Niepodlegloschi 71, 02-626, <br/> Warsaw, Poland </h6>

      			</Cell>
      			
      			<Cell col = {8} className='resume-rigth'>  
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
      				stName = 'Department of Physics'
      				sDegree = 'Master Degree'
      				/>

      				<Education
      				sYear = {2014}
      				eYear = {2017}
      				uName = 'Yerevan State University'
      				stName = 'Department of Engineering'
      				sDegree = 'PhD Degree'
      				/>

      				<Education
      				sYear = {2018}
      				eYear = 'currently'
      				uName = 'National Center of Nuclear Research'
      				stName = 'TRISO fuel Performance Analysis'
      				sDegree = 'PhD study'
      				/>

      				<h3>Experience</h3> 

      				<Experience
      				sYear = {2012}
      				eYear = {2018}
      				compName = 'NRSC'
      				jpos = 'Specialist on Neutronic Analysis'
      				jdesc = 'Perform Criticality Safety Analysis'
      				/>

      				<h3>Skills</h3> 

      				<Skills
      				skill = 'HTML5/CSS3'
      				progress = {90}
      				/>

      				<Skills
      				skill = 'JavaScript'
      				progress = {82}
      				/>

      				<Skills
      				skill = 'React'
      				progress = {70}
      				/>

                              
                              <Skills
                              skill = 'Python'
                              progress = {80}
                              />

                              <Skills
                              skill = 'Git'
                              progress = {84}
                              />

                              <Skills
                              skill = 'Github'
                              progress = {87}
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