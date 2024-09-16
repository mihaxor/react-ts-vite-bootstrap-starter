import {Button, Col, Container, Row, Stack} from 'react-bootstrap';
import {ReactElement, useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
import MenuComponent from '../components/MenuComponent.tsx';

const ContainerView = (): ReactElement => {
    const [theme, setTheme] = useState<string>('dark');

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#212529';
    });

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Stack direction={'horizontal'} gap={2}>
                        <Button variant='light' onClick={() => setTheme('light')}>Light</Button>
                        <Button variant='dark' onClick={() => setTheme('dark')}>Dark</Button>
                    </Stack>
                </Col>
                <MenuComponent theme={theme} />
            </Row>
            <br />
            <Outlet context={theme} />
        </Container>
    )
};

export default ContainerView
