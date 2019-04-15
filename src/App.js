import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl';
import Main from './Components/Main';
import {Link} from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <Layout className='top_menu_class'>
          <Header className = 'header-color' title={<Link 
                style={{textDecoration: 'none', color: 'white'}} to="/">
                  My Portfolio</Link>} scroll>
              <Navigation>
                  <Link to="/resume"> Resume </Link>
                  <Link to="/projects">Projects </Link>
                  <Link to="/contacts">Contacts </Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
              <Navigation >
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contacts">Contacts</Link>
              </Navigation>
          </Drawer> 
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
      </Layout>
      );
  }
}

export default App;
