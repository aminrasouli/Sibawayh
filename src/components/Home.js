import React, {Component} from 'react';
import {Button, Col, Container, Row} from "reactstrap";
import {remote} from "electron";

const path = require('path');
const url = require('url');
const __dirname = remote.app.getAppPath();
const {BrowserWindow} = require('electron').remote;

import bookBrainSvg from '../assets/img/bookBrain.svg';
import appleSvg from "../assets/img/apple.svg";
import bookSvg from "../assets/img/book.svg";
import certificateSvg from "../assets/img/certificate.svg";

class Home extends Component {
    static getPath(patha) {
        return url.format({
            protocol: 'file:',
            pathname: path.join(__dirname, 'src', patha),
            slashes: true
        });
    }
    static getPathFromDist(patha) {
        return url.format({
            protocol: 'file:',
            pathname: path.join(__dirname, 'dist', patha),
            slashes: true
        });
    }
    aboutMe() {
        let takeScreen = new BrowserWindow({
            backgroundColor: '#84fab0',
            width: 300,
            height: 420,
            frame: false,
            resizable: false,
            icon: path.join(__dirname, 'src/assets/img/arabic2.ico'),
            parent: require('electron').remote.getCurrentWindow()
        });
        takeScreen.loadURL(`file://${__dirname}/src/public/about.html`);
    }
    helpMe() {
        let takeScreen = new BrowserWindow({
            backgroundColor: '#84fab0',
            width: 300,
            height: 280,
            frame: false,
            resizable: false,
            icon: path.join(__dirname, 'src/assets/img/arabic2.ico'),
            parent: require('electron').remote.getCurrentWindow()
        });
        takeScreen.loadURL(`file://${__dirname}/src/public/help.html`);
    }
    render() {
        return (
            <div>
                <h3>صفحه اصلی</h3>
                <hr/>
                <br/>
                <Row>
                    <Col xs="3" sm="3">
                    <div className="fea-img" style={{width: '100px', margin: 'auto'}}>
                        <img src={Home.getPathFromDist(bookBrainSvg)} alt=""/>
                    </div>
                    <h5 style={{fontWeight: 400, textAlign: 'center'}}>تمرینات</h5>
                </Col>
                    <Col xs="3" sm="3">
                        <div className="fea-img" style={{width: '100px', margin: 'auto'}}>
                            <img src={Home.getPathFromDist(appleSvg)} alt=""/>
                        </div>
                        <h5 style={{fontWeight: 400, textAlign: 'center'}}>قوائد</h5>
                    </Col>
                    <Col xs="3" sm="3">
                        <div className="fea-img" style={{width: '100px', margin: 'auto'}}>
                            <img src={Home.getPathFromDist(bookSvg)} alt=""/>
                        </div>
                        <h5 style={{fontWeight: 400, textAlign: 'center'}}>درسنامه</h5>
                    </Col>
                    <Col xs="3" sm="3">
                        <div className="fea-img" style={{width: '100px', margin: 'auto'}}>
                            <img src={Home.getPathFromDist(certificateSvg)} alt=""/>
                        </div>
                        <h5 style={{fontWeight: 400, textAlign: 'center'}}>واژگان</h5>
                    </Col>

                </Row>
                <hr/>
                <Row>
                    <Col xs="6" sm="6">
                        <Button onClick={this.helpMe} style={{ borderRadius: '2px', fontWeight: '400' }} color="warning" size="lg" block>راهنما</Button>
                    </Col>
                    <Col xs="6" sm="6">
                        <Button onClick={this.aboutMe} style={{ borderRadius: '2px', fontWeight: '400' }} color="secondary" size="lg" block>درباره ما</Button>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Home;
