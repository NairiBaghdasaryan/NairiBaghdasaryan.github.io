import React, { Component } from 'react';
import {Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';


class Project extends Component {
  constructor(props) {
  	super(props);
	this.state = {activeTab: 0}
	};


	toggleCategories() {
		if(this.state.activeTab ===0) {
			return(
					<div className = 'cards'>
						<Card shadow={5} style = {{minWidth: '400px', margin:'auto'}}>
							<CardTitle style = {{height: '300px', color:'white', justifyContent: 'center', background: 
								'url(https://cms-assets.tutsplus.com/uploads/users/30/posts/18346/preview_image/react-retina-preview.png) center /cover '}}>
								React Project
							</CardTitle>
							<CardText style = {{color: 'red', margin: 'auto'}}> <h3>Cooming soon</h3></CardText>
							<CardActions border>
								<Button colored>Github</Button>
							</CardActions>
							<CardMenu style = {{color: 'white'}}>
								<IconButton name="share" />
							</CardMenu>
						</Card>
					</div>

				)
		} else if (this.state.activeTab ===1) {
			return(
					 <div className = 'cards'>
						<Card shadow={5} style = {{minWidth: '400px', margin:'auto'}}>
							<CardTitle style = {{height: '300px', color:'black', justifyContent: 'center', background: 
								'url(https://www.apemockups.com/wp-content/uploads/edd/2017/10/python-logo.png) center /cover '}}>
								Python Project
							</CardTitle>
							<CardText style = {{color: 'white', backgroundColor:"black", margin: 'auto'}}> <h3>Cooming soon</h3></CardText>
							<CardActions border>
								<Button colored>Github</Button>
							</CardActions>
							<CardMenu style = {{color: 'white'}}>
								<IconButton name="share" />
							</CardMenu>
						</Card>
					</div>
				) 
		} else if (this.state.activeTab ===2) {
			return(
					<div className = 'cards'>
						<Card shadow={5} style = {{minWidth: '400px', margin:'auto'}}>
							<CardTitle style = {{height: '300px', color:'black', justifyContent: 'center', background: 
								'url(https://www.nsoftware.com/platforms/nodejs/default.png) center /cover '}}>
								Node Project
							</CardTitle>
							<CardText style = {{color: 'white', backgroundColor: "black", margin: 'auto'}}><h3> Cooming soon</h3></CardText>
							<CardActions border>
								<Button colored >Github</Button>
							</CardActions>
							<CardMenu style = {{color: 'white'}}>
								<IconButton name="share" />
							</CardMenu>
						</Card>
					</div>
				)
		} else if (this.state.activeTab ===3) {
			return(
					<div className = 'cards'>
						<Card shadow={5} style = {{minWidth: '400px', margin:'auto'}}>
							<CardTitle style = {{height: '300px', color:'black', justifyContent: 'center', background: 
								'url(https://dwglogo.com/wp-content/uploads/2017/09/1500px-Postgresql_logo.png) center /cover '}}>
								PostgreSQL Project
							</CardTitle>
							<CardText style = {{color: 'white', backgroundColor:"black", margin: 'auto'}}> <h3>Cooming soon</h3></CardText>
							<CardActions border>
								<Button colored>Github</Button>
							</CardActions>
							<CardMenu style = {{color: 'white'}}>
								<IconButton name="share" />
							</CardMenu>
						</Card>
					</div>
				)
		} 
	}


    render() {
        return (
	      	<div className = "category-tab">
	      		<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
	                    <Tab>React</Tab>
	                    <Tab>Python</Tab>
	                    <Tab>Node</Tab>
	                    <Tab>PostgreSQL</Tab>
	            </Tabs>

	            <section className = "project-grid">
	           		{this.toggleCategories()}
	            </section>

			</div>
    );
  }
}

export default Project;