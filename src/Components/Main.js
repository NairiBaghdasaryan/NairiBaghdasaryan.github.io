import React from 'react';
import {Switch, Route} from 'react-router-dom';

import About from './aboutme';
import Contact from './contacts';
import Project from './projects';
import Resume from './resume';
import Landing from './landingpage';

const Main = () => {
	return (
			<Switch>
				<Route exact path = '/' component = {Landing} />;
				<Route exact path = '/aboutme' component = {About} />;
				<Route exact path = '/contacts' component = {Contact} />;
				<Route exact path = '/resume' component = {Resume} />;
				<Route exact path = '/projects' component = {Project} />;
			</Switch>

		);
}

export default Main;