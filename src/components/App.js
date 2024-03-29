import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.scss';
import Middle from "./Middle";

function App() {
  return (   
    
    <Router>
      <div className="app">
        <Container>            
            <Row>
                <Col md={3} className="left"><LeftSide></LeftSide></Col>
                <Col md="auto" className="middle">
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/topics" component={Topics} />
                </Col>
                <Col md={3} className="right"><RightSide></RightSide></Col>
            </Row>
        </Container>
        {/* <Header /> */}

        
      </div>
    </Router>
  );
}

function Home() {
  return <Middle></Middle>;
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  console.log({match});
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  console.log({match});
  
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

export default App;