import React from 'react';
import {Row, Col} from 'reactstrap';
const path = require('path');
const url = require('url');
import {remote} from 'electron';

const __dirname = remote.app.getAppPath();

export default class PdfBook extends React.Component {
    static getPath(pdfName) {
        return url.format({
            protocol: 'file:',
            pathname: path.join(__dirname, 'src', pdfName),
            slashes: true
        })
    }

    static CreatePdfPath(path) {
        return PdfBook.getPath('public/web/viewer.html') + '#' + PdfBook.getPath('assets/pdf/' + path)
    }

    render() {
        return (
            <div>
                <h4>کتاب درسی</h4>
                <Row>
                    <Col sm="12">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <webview style={{
                                width: '100%',
                                minHeight: '900px'
                            }} src={PdfBook.CreatePdfPath('/book.pdf')}/>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}