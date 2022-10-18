import {arrWood, arrFabric, products} from '../../db/products';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ColorLine from '../ColorLine/ColorLine';
import Form from 'react-bootstrap/Form';


import './DialogWindow.scss';



const DialogWindow = (props) => {

    const [constrType, setConstrType] = useState();
    const [constrWood, setConstrWood] = useState();
    const [constrFabric, setConstrFabric] = useState();

    const [constrId, setConstrId] = useState();
    const [constrImg, setConstrImg] = useState();


    const handleClose = () => props.setShow(false);


    useEffect (()=> {
        const matcher = constrType === 'tables' ? constrWood : `${constrWood}-${constrFabric}`;
        const filteredItem = products[constrType]?.filter((item)=>{
            return item.type === matcher
        })
        setConstrId(filteredItem ? filteredItem[0]?.id : null)
        setConstrImg(filteredItem ? filteredItem[0]?.img : null)
    }, [constrType,constrWood, constrFabric])




    return (

        <Modal fullscreen={true} show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Constructor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Select furniture type</Form.Label>
                <Form.Select aria-label="Select" onChange={(e)=> {setConstrType(e.target.value)}}>
                    <option selected disabled >Select an option</option>
                    <option value="armchairs">armchair</option>
                    <option value="tables">table</option>
                </Form.Select>



                {constrType === 'armchairs'?
                    <div style={{display:'flex'}}>
                            <ColorLine title={'wood type'} setSmth={setConstrWood} array={arrWood}/>
                            <div style={{width: '300px'}}>  
                                {constrImg ? <img style={{width: '100%'}} src={constrImg} alt="" /> : null}
                            </div>
                            <ColorLine title={'fabric type'} setSmth={setConstrFabric} array={arrFabric}/>
                    </div> 
                    :
                    constrType === 'tables'?
                    <div style={{display:'flex'}}>
                            <ColorLine title={'wood type'} setSmth={setConstrWood} array={arrWood}/>
                    </div> 
                    : 
                    null
                }
            </Modal.Body>

            <Modal.Footer>
                <Link to={`catalog/${constrType}/${constrId}`}>
                    <Button variant="secondary" onClick={handleClose}>
                        Select            
                    </Button>
                </Link>
            </Modal.Footer>
        </Modal>
    )
}

export default DialogWindow;