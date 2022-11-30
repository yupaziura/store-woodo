import Form from 'react-bootstrap/Form';

import './Filter.scss';

const Filter = (props) => {
    
    return (
        <>
            <div className="container_filter">
                <h4>Filters</h4>
                <Form.Check
                    type='checkbox'
                    label={`Select with `}
                />
            </div>
        </>
    )
}

export default Filter;