import {Col, Row} from 'react-bootstrap';
import CardComponent from '../components/CardComponent.tsx';
import {ReactElement} from 'react';

const HomePage = (): ReactElement => {
    return (
        <Row>
            {[0, 1, 2].map((index) =>
                (
                    <Col key={index}>
                        <CardComponent />
                    </Col>
                ))}
        </Row>
    );


}

export default HomePage;