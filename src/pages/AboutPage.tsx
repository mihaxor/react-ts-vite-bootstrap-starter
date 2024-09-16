import {ReactElement} from 'react';
import {Badge, Figure} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {IRootState} from '@/_configurations/ReduxStoreConfig.ts';

const AboutPage = (): ReactElement => {
    const cardsCount = useSelector((state: IRootState) => state.cards.value);

    return (
        <Figure>
            <Figure.Caption>
                <h4><Badge bg='secondary'>Number of increments:</Badge> <Badge>{cardsCount}</Badge></h4>
            </Figure.Caption>
        </Figure>
    );
}

export default AboutPage;