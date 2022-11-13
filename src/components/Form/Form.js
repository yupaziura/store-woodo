import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from '../Button/Button';



const OrderForm = (props) => {


    // const handleClose = () => props.setOrder(false);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');

    const [comment, setComment] = useState('');

    const serviceID = 'default_service';
    const templateID = 'template_xj6d6vd';



    // const dataNew = {
    //     'name': name,
    //     'surname': surname,
    //     'phone' : phone,
    //     'comment': comment,
    //     item: props.id,
    //     descr: props.descr,
    // }

    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm(serviceID, templateID, dataNew, '9mAShi4LHvD5Qwgz0')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };

    const data = {
        service_id: serviceID,
        template_id: templateID,
        user_id: '9mAShi4LHvD5Qwgz0',
        template_params: {
            'name': name,
            'surname': surname,
            'phone' : phone,
            'comment': comment,
            item: props.id,
            descr: props.descr,
        }
    };
    const params ={
        'name': name,
        'surname': surname,
        'phone' : phone,
        'comment': comment,
        item: props.id,
        descr: props.descr,
    }
     

    const send = (e) => {
        e.preventDefault();
        emailjs.send(serviceID, templateID, params, '9mAShi4LHvD5Qwgz0')
    .then(function(response) {
        alert('ok')
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        alert('not ok')
       console.log('FAILED...', error);
    });
    }


    return (
         <Modal  show={props.order}>
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




     
                    <button type="submit">test</button>
              
                            
                        {/* <Button type='submit' action={sendMail} text="Звмовити"/> */}
                           
                            </Form>
 </div>
</Modal.Body>
</Modal>
    )
}

export default OrderForm;