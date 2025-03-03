import {Badge, Button, Card, Stack} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import {useOutletContext} from 'react-router-dom';
import {updateCardsPayload} from '@/_redux';
import {useDispatch} from 'react-redux';

const CardComponent: React.FC = () => {

    const [count, setCount] = useState<number>(0),
        theme = useOutletContext<string>(),
        dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateCardsPayload(count));
    }, [count]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Card style={{width: '20rem'}} data-bs-theme={theme}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Stack gap={3}>
                    <Button variant='primary' size='sm' onClick={() => setCount(count => count + 1)}>Increment</Button>
                    <Button variant='warning' size='sm' onClick={() => setCount(count => count - 1)}>Decrement</Button>
                    <Button variant='danger' size='sm' onClick={() => setCount(0)}>Reset</Button>
                </Stack>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Badge>Go somewhere count is {count}</Badge>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;