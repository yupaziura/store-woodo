import { useState } from "react";
import { Link } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from '../Button/Button';



const OrderForm = (props) => {
    const handleClose = () => props.setOrder(false);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const [phone, setPhone] = useState();
    const [mail, setMail] = useState();

    const [comment, setComment] = useState('');

    return (
         <Modal  show={props.order} onHide={handleClose}>
            <Modal.Body >


                <div style={{margin: '0 auto'}}>

                
                    <Modal.Header className="border border-0" closeButton>
                        <h3 className="title">Оформленя замовлення</h3>
                    </Modal.Header>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Ім`я</Form.Label>
                            <Form.Control value={name} onChange={(e)=>setName(e.target.value)} placeholder=' введіть ім`я' required></Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Прізвище</Form.Label>
                            <Form.Control value={surname} onChange={(e)=>setSurname(e.target.value)} placeholder='введіть прізвище' required></Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control type='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='введіть номер телефону' required></Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Електронна пошта</Form.Label>
                            <Form.Control type='email' value={mail} onChange={(e)=>setMail(e.target.value)} placeholder='введіть ел. пошту' ></Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Коментар до замовлення</Form.Label>
                            <Form.Control as="textarea" rows={3} value={comment} onChange={(e)=>setComment(e.target.value)} placeholder='введіть коментар' ></Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Даю згоду на обробку персональних даних" />
                        </Form.Group>


                        {/* <Form.Label>Оберить тип виробу</Form.Label>
                        <Form.Select value={constrType} aria-label="Select" onChange={(e)=> {setConstrType(e.target.value); setConstrTypeUA(e.target.selectedOptions[0].text)}}>
                            <option value="default" disabled >Виберіть опцію</option>
                            <option value="armchairs">крісло</option>
                            <option value="tables">стіл</option>
                        </Form.Select> */}



     

              
                            {/* <Link to={`catalog/${constrType}/${constrId}`}> */}
                                <Button type='submit' action={handleClose} text="Переглянути товар"/>
                            {/* </Link> */}
                            </Form>
 </div>
</Modal.Body>
</Modal>
    )
}

export default OrderForm;