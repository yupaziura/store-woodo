import {arrWood, arrFabric, products} from '../../db/products';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import ColorLine from '../ColorLine/ColorLine';
import Form from 'react-bootstrap/Form';
import Button from '../Button/Button';


import './DialogWindow.scss';



const DialogWindow = (props) => {

    const [constrType, setConstrType] = useState("default");
    const [constrWood, setConstrWood] = useState();
    const [constrFabric, setConstrFabric] = useState();

    const [constrTypeUA, setConstrTypeUA] = useState("default");
    const [constrWooUA, setConstrWoodUA] = useState();
    const [constrFabricUA, setConstrFabricUA] = useState();

    const [constrId, setConstrId] = useState();
    const [constrImg, setConstrImg] = useState();

    const summ_end = constrType === 'armchairs'? ` | Подушка: ${constrFabricUA}` : '';
    const summ = `Тип виробу: ${constrTypeUA} | Деревина: ${constrWooUA}`+ summ_end;


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



            <Modal.Body >


                <div style={{maxWidth: '1000px', margin: '0 auto'}}>

                    <Modal.Header className="border border-0" closeButton>
                        <h3 className="title">Конструктор</h3>
                    </Modal.Header>


                    <Form.Label>Оберить тип виробу</Form.Label>
                    <Form.Select value={constrType} aria-label="Select" onChange={(e)=> {setConstrType(e.target.value); setConstrTypeUA(e.target.selectedOptions[0].text)}}>
                        <option value="default" disabled >Виберіть опцію</option>
                        <option value="armchairs">крісло</option>
                        <option value="tables">стіл</option>
                    </Form.Select>



                    {constrType !== 'default' ?
                        <>
                            <div className='constr_container' >
                                <ColorLine title={'тип дерева'} setSmth={setConstrWood} setSmthUA={setConstrWoodUA} array={arrWood}/>
                                <div className='img' style={{width: '40%'}}>  
                                    {constrImg ? <img className='constr_img' src={constrImg} alt="" /> : null}
                                </div>
                                {
                                    constrType === 'armchairs'? <ColorLine title={'тип подушки'} setSmth={setConstrFabric} setSmthUA={setConstrFabricUA} array={arrFabric}/> : <div></div>
                                }
                            </div> 

                            {(constrWood && constrFabric && constrType === 'armchairs') || (constrWood && constrType === 'tables') ? 
                                <div className='footer'>
                                    <div className="summ">{summ}</div>
                                    <div>
                                        <Link to={`catalog/${constrType}/${constrId}`}>
                                            <Button  action={handleClose} text="Переглянути товар"/>
                                        </Link>
                                    </div>
                                </div>
                                :
                                null
                            }
                        </>
                        : 
                        null
                    }
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DialogWindow;