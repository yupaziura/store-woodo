import { useState } from "react";
import emailjs from '@emailjs/browser';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from '../Button/Button';
import Response from "../DialogWindow/Response";



const OrderForm = (props) => {


    const handleClose = () => props.setOrder(false);

    const [showRes, setShowRes] = useState(false);

    const [name, setName] = useState('');
    // const [surname, setSurname] = useState('');

    const [phone, setPhone] = useState('');
    // const [mail, setMail] = useState('');

    // const [comment, setComment] = useState('');
    // const [checked, setChecked] = useState(false);

    const [result, setResult] = useState('');

    const serviceID = 'default_service';
    const templateID = 'template_xj6d6vd';



    const params ={
        'name': name,
        'surname': '',
        'phone' : phone,
        'comment': '',
        item: props.id,
        descr: props.descr,
    }
     

    const send = (e) => {
        e.preventDefault();

        emailjs.send(serviceID, templateID, params, '9mAShi4LHvD5Qwgz0')
            .then(function(response) {
                setResult('ok');
                setShowRes(true);
            }, function(error) {
                setResult('not ok');
                setShowRes(true);
            });

            setName('');
            // setSurname('');
            // setMail('');
            setPhone('');
            // setComment('');

            // setChecked(false);
            handleClose();
    }


    return (
        <>
         <Modal  show={props.order} onHide={handleClose}>
            <Modal.Body >


                <div style={{margin: '0 auto'}}>

                
                    <Modal.Header className="border border-0" closeButton>
                        <h3 className="title">Оформленя замовлення</h3>
                    </Modal.Header>

                    <Form  onSubmit={(e)=>send(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Ім`я</Form.Label>
                            <Form.Control value={name} onChange={(e)=>setName(e.target.value)} placeholder=' введіть ім`я' required></Form.Control>
                        </Form.Group>

                        {/* <Form.Group className="mb-3">
                            <Form.Label>Прізвище</Form.Label>
                            <Form.Control value={surname} onChange={(e)=>setSurname(e.target.value)} placeholder='введіть прізвище' required></Form.Control>
                        </Form.Group> */}

                        <Form.Group className="mb-3">
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control type='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='введіть номер телефону' required></Form.Control>
                        </Form.Group>

                        {/* <Form.Group className="mb-3">
                            <Form.Label>Електронна пошта</Form.Label>
                            <Form.Control type='email' value={mail} onChange={(e)=>setMail(e.target.value)} placeholder='введіть ел. пошту' ></Form.Control>
                        </Form.Group> */}

                        {/* <Form.Group className="mb-3">
                            <Form.Label>Коментар до замовлення</Form.Label>
                            <Form.Control as="textarea" rows={3} value={comment} onChange={(e)=>setComment(e.target.value)} placeholder='введіть коментар' ></Form.Control>
                        </Form.Group> */}
{/* 
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check required onChange={()=>setChecked(!checked)} checked={checked} type="checkbox" label="Даю згоду на обробку персональних даних" />
                        </Form.Group> */}
                            
                        <Button type='submit' action={()=>{}} text="Звмовити"/>
                           
                    </Form>
                </div>
            </Modal.Body>
        </Modal>

        <Response showRes={showRes} setShowRes={setShowRes} result={result}/>

        </>
    )
}

export default OrderForm;