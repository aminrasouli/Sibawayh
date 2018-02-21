import React from 'react';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, ListGroup, ListGroupItem,
    ListGroupItemHeading, ListGroupItemText
} from 'reactstrap';
import classnames from 'classnames';
import Data from '../data/Data';

const path = require('path');
const url = require('url');
import {remote} from 'electron';

const __dirname = remote.app.getAppPath();

export default class Tabs extends React.Component {
    static getPath(pathName) {
        return url.format({
            protocol: 'file:',
            pathname: path.join(__dirname, 'src', pathName),
            slashes: true
        })
    }

    CreatePdfPath(path) {
        return Tabs.getPath('public/web/viewer.html') + '#' + Tabs.getPath('assets/pdf/' + path)
    }
    CreateAudioPath(fileName) {
        return Tabs.getPath('assets/audio/' + this.props.match.params.id + '/' + fileName);
    }

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    getCourseData() {
        return Data[this.props.match.params.id];
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            واژگان
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            درسنامه
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '3'})}
                            onClick={() => {
                                this.toggle('3');
                            }}
                        >
                            قوائد
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '4'})}
                            onClick={() => {
                                this.toggle('4');
                            }}
                        >
                            تمرینات
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '5'})}
                            onClick={() => {
                                this.toggle('5');
                            }}
                        >
                            فایل های صوتی
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <webview className="webViewPdf" style={{
                                        width: '100%',
                                        minHeight: '900px'
                                    }} src={this.CreatePdfPath(this.getCourseData()['vajegan']['pdf'])}/>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <webview className="webViewPdf" style={{
                                        width: '100%',
                                        minHeight: '900px'
                                    }} src={this.CreatePdfPath(this.getCourseData()['darsanem']['pdf'])}/>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <webview className="webViewPdf" style={{
                                        width: '100%',
                                        minHeight: '900px'
                                    }} src={this.CreatePdfPath(this.getCourseData()['ghavaed']['pdf'])}/>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            <Col sm="12">
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <webview className="webViewPdf" style={{
                                        width: '100%',
                                        minHeight: '900px'
                                    }} src={this.CreatePdfPath(this.getCourseData()['tamrinat']['pdf'])}/>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="5">
                        <Row>
                            <Col sm="12">
                                <div>
                                    <ListGroup style={{marginTop: '2em', padding: '0'}}>
                                        <ListGroupItem>
                                            <ListGroupItemHeading>واژگان</ListGroupItemHeading>
                                            <ListGroupItemText>
                                                <audio style={{ width: '100%' }} src={this.CreateAudioPath('vajegan.mp3')} controls controlsList="nodownload"/>
                                            </ListGroupItemText>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <ListGroupItemHeading>متن درس</ListGroupItemHeading>
                                            <ListGroupItemText>
                                                <audio style={{ width: '100%' }} src={this.CreateAudioPath('matn.mp3')} controls controlsList="nodownload"/>
                                            </ListGroupItemText>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <ListGroupItemHeading>صحیح و غلط</ListGroupItemHeading>
                                            <ListGroupItemText>
                                                <audio style={{ width: '100%' }} src={this.CreateAudioPath('sahihghalat.mp3')} controls controlsList="nodownload"/>
                                            </ListGroupItemText>
                                        </ListGroupItem>
                                        <ListGroupItem style={this.props.match.params.id === '2' || this.props.match.params.id === '4' || this.props.match.params.id === '6' ? { display: 'none' } : {}}>
                                            <ListGroupItemHeading>مکالمه</ListGroupItemHeading>
                                            <ListGroupItemText>
                                                <audio style={{ width: '100%' }} src={this.CreateAudioPath('mokaleme.mp3')} controls controlsList="nodownload"/>
                                            </ListGroupItemText>
                                        </ListGroupItem>
                                    </ListGroup>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}