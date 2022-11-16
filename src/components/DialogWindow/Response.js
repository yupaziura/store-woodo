import {  useEffect } from 'react';

import Modal from 'react-bootstrap/Modal';


const Response = ({showRes, setShowRes, result}) => {
    

    useEffect(()=> {
        if (showRes) {
            setTimeout(()=> setShowRes(false), 3000)
        }
    }, [showRes, setShowRes])

    return (
       <Modal show={showRes} variant="success" style={{backgroundColor: result === 'ok' ? 'seccess' : 'danger'}}>
            
            <Modal.Header className="border border-0" style={{textAlign: 'center'}}>
                <h3 className="title">{result === 'ok' ? 'Ваше замовлення прийняте' : 'Упс, щось пішло не так :( '}</h3>
            </Modal.Header>

       </Modal>
    )
}

export default Response;