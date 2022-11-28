import {Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Sort = ({setType}) => {


    return (
        <>
            <h4>Сортувати за</h4>
            <Stack direction="horizontal" gap={2} className='mb-4'>
                <Button onClick={() => setType(0)} variant="secondary">збільшенням ціни ↑</Button>
                <Button onClick={() => setType(1)} variant="secondary">зменшенням ціни ↓</Button>
                <Button onClick={() => setType(2)} variant="secondary">скинути</Button>
            </Stack>
        </>
    )
}

export default Sort;