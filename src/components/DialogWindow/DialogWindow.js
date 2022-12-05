import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import Modal from 'react-bootstrap/Modal';
import ColorLine from '../ColorLine/ColorLine';
import Form from 'react-bootstrap/Form';
import Button from '../Button/Button';
import { Spinner } from 'react-bootstrap';
import Error from '../Error/Error';


import './DialogWindow.scss';



const DialogWindow = (props) => {

    const [data, setData] = useState([]);
    const [dataWood, setDataWood] = useState([]);
    const [dataFabric, setDataFabric] = useState([]);

    const onLoaded = (data) => {
        setData(data.sort((a,b) => a.id - b.id) );
    }
    const onLoadedWood = (data) => {
        setDataWood(data.sort((a,b) => a.id - b.id) );
    }

    const onLoadedFabric = (data) => {
        setDataFabric(data.sort((a,b) => a.id - b.id) );
    }

    const onRequest = () => {
        props.getItem().then(onLoaded);
        props.getFabricArr().then(onLoadedFabric);
        props.getWoodArr().then(onLoadedWood);
    }

    useEffect(() => {onRequest()}, []);

    const [constrType, setConstrType] = useState("armchairs");
    const [constrWood, setConstrWood] = useState('oakWhite');
    const [constrFabric, setConstrFabric] = useState('blackStripe');


    const [constrTypeUA, setConstrTypeUA] = useState("крісло");
    const [constrWooUA, setConstrWoodUA] = useState('білий дуб');
    const [constrFabricUA, setConstrFabricUA] = useState('чорна зі смужкою');

    const [constrId, setConstrId] = useState();
    const [constrImg, setConstrImg] = useState();

    const summ_end = constrType === 'armchairs'? ` | Подушка: ${constrFabricUA}` : '';
    const summ = `Тип виробу: ${constrTypeUA} | Деревина: ${constrWooUA}`+ summ_end;


    const handleClose = () => props.setShow(false);


    useEffect (()=> {
        const matcher = `${constrWood}-${constrFabric}`;
        const filteredItem = data?.filter((item)=>{
            return item.type === matcher
        })
        setConstrId(filteredItem ? filteredItem[0]?.id : null)
        setConstrImg(filteredItem ? filteredItem[0]?.imgArr[0].url : null)
    }, [constrType,constrWood, constrFabric, data]);


    return (

        <Modal fullscreen={true} show={props.show} onHide={handleClose}>



            <Modal.Body >

                {props.loading? 

                    <div style={{textAlign: 'center'}}>
                        <Spinner animation="border" role="status" >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                        : 
                        
                       


                    <div style={{maxWidth: '1000px', margin: '0 auto'}}>

                        <Modal.Header className="border border-0" closeButton>
                            <h3 className="title">Конструктор</h3>
                        </Modal.Header>

                        
                        {props.error? <div onClick={handleClose}><Error/></div> :
                            <div> 
                                <Form.Label>Оберить тип виробу</Form.Label>
                                <Form.Select value={constrType} aria-label="Select" onChange={(e)=> {setConstrType(e.target.value); setConstrTypeUA(e.target.selectedOptions[0].text)}}>
                                    <option value="default" disabled >Виберіть опцію</option>
                                    <option value="armchairs">крісло</option>
                                    {/* <option value="tables">стіл</option> */}
                                </Form.Select>



                                {constrType !== 'default' ?
                                    <>
                                        <div className='constr_container' >
                                            <ColorLine title={'тип дерева'} setSmth={setConstrWood} setSmthUA={setConstrWoodUA} array={dataWood}/>
                                            <div className='img' style={{width: '40%'}}>  
                                                {constrImg ? <img className='constr_img' src={constrImg} alt="" /> : null}
                                            </div>
                                            {
                                                constrType === 'armchairs'? <ColorLine title={'тип подушки'} setSmth={setConstrFabric} setSmthUA={setConstrFabricUA} array={dataFabric}/> : <div></div>
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
                            }
                    </div>
                }
            </Modal.Body>
        </Modal>
    )
}

export default DialogWindow;