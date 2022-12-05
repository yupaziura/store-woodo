import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Filter.scss';

const Filter = (props) => {
    
    return (
        <>
            <div className="container_filter">
                <h4>Фільтри</h4>
                <Form.Check
                    type='checkbox'
                    label={`Акційні товари`}
                />
                <br />

                <h5>Тип деревини</h5>
                <Form.Check
                    type='checkbox'
                    label={`дуб`}
                />
                <Form.Check
                    type='checkbox'
                    label={`білий дуб`}
                />
                <Form.Check
                    type='checkbox'
                    label={`чорний дуб`}
                />
                <Form.Check
                    type='checkbox'
                    label={`ясен`}
                />

                <br />

                <Button> Apply</Button>
                <Button> Reset</Button>

            </div>
        </>
    )
}

export default Filter;