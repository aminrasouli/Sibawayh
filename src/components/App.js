import "../assets/css/App.css";
import {Component} from "react";
import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";
import Jumbutron from "./Jumbutron";
import React from "react";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Tabs from "./Tabs";
import Home from "./Home";
import LinkNav from './NavLink';
import PdfBook from "./PdfBook";

class App extends Component {
    render() {
        return (
            <div>
                <Jumbutron/>
                <Router>
                    <div>
                        <Container fluid={true}>

                            {window.location.pathname.includes('index.html') && <Redirect to="/"/>}

                            <Row>
                                <Col sm="8" xs="8">
                                    <Route exact path="/" component={Home}/>
                                    <Route exact path="/course/:id" component={Tabs}/>
                                    <Route exact path="/pdfBook" component={PdfBook}/>
                                </Col>
                                <Col sm="4" xs="4">
                                    <ListGroup>
                                        <ListGroupItem active disabled style={{
                                            backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                                            borderColor: 'rgb(140, 222, 225)',
                                            color: '#333333',
                                            cursor: 'default'
                                        }}>سرفصل ها</ListGroupItem>
                                        <LinkNav/>

                                    </ListGroup>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Router>

            </div>
        )
    }
}

export default App;
