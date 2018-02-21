import React from 'react';
import {Jumbotron, Badge} from 'reactstrap';

const Jumbutron = () => {
    return (
        <Jumbotron>
            <h1 className="display-3 animated fadeInDown" style={{fontWeight: 700}}>
                عربی <Badge style={{
                background: '#333333',
                fontSize: '40px',
                padding: '4px 15px',
                fontWeight: '200'
            }} color="secondary">۲</Badge>
            </h1>
            <p className="lead animated fadeInUp" style={{fontWeight: 500}}>پایه یازدهم (ریاضی و تجربی)</p>
        </Jumbotron>
    );
};

export default Jumbutron;