import {Col, Row} from 'react-bootstrap';
import React from 'react';
import CardComp from '@/common/components/CardComp';

const HomePage: React.FC = () => {
    return (
        <Row>
            {[0, 1, 2].map((index) =>
                (
                    <Col key={index}>
                        <CardComp />
                    </Col>
                ))}
        </Row>
    );


}

export default HomePage;

