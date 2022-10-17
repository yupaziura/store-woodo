import {arrWood, arrFabric, products} from '../../db/products';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';
import ColorLine from '../ColorLine/ColorLine';

// import './DialogWindow.css';



const DialogWindow = (props) => {

    const [constrType, setConstrType] = useState();
    const [constrWood, setConstrWood] = useState();
    const [constrFabric, setConstrFabric] = useState();

    const [constrId, setConstrId] = useState();


    const handleClose = () => props.setShow(false);


    useEffect (()=> {
        const matcher = constrType === 'tables' ? constrWood : `${constrWood}-${constrFabric}`;
        const filteredItem = products[constrType]?.filter((item)=>{
            return item.type === matcher
        })
        setConstrId(filteredItem ? filteredItem[0]?.id : null)
    }, [constrType,constrWood, constrFabric])



    return (

         <Modal fullscreen={true} show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <select placeholder='Select' onChange={(e)=> {setConstrType(e.target.value)}}>
            <option disabled selected value> -- select an option -- </option>
            <option>armchairs</option>
            <option>tables</option>
        </select>

        {constrType === 'armchairs'?
        <div style={{display:'flex'}}>
                <ColorLine setSmth={setConstrWood} array={arrWood}/>
                <ColorLine setSmth={setConstrFabric} array={arrFabric}/>
        </div> 
        :
        constrType === 'tables'?
        <div style={{display:'flex'}}>
                <ColorLine setSmth={setConstrWood} array={arrWood}/>
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