import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from 'react-helmet-async';

import CustomButton from "../../Button/Button";
import Modal from 'react-bootstrap/Modal';
import Slider from "../../Carusel/Carusel";
import OrderForm from "../../Forms/OrderForm";
import { Spinner } from "react-bootstrap";
import Error from "../../Error/Error";

import './SingleProductPage.scss';

const SingleProductPage = ({rootType, rootId, getArmchairs, getTables, getAccess, loading, error}) => {

    const {type, id} = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const onLoaded = (data) => {
        setData(data.sort((a,b) => a.id - b.id) );
    }
    const onRequest = () => {

        switch (type) {
            case 'armchairs':
                getArmchairs().then(onLoaded);
                break;
            case 'tables':
                getTables().then(onLoaded);
                break;
            case 'accessoires':
                getAccess().then(onLoaded);
                break;
            default: 
            throw new Error('unexpected error');
        }
    }

    useEffect(() => {onRequest()}, [id, type])



    useEffect(()=> {
        if(id == 'undefined'){
            navigate("/notfound", { replace: true });
        }
    }, [id, type, navigate]);



    
    const [show, setShow] = useState(false);
    const [order, setOrder] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Item page"
                />
                <title>{ 'Обраний товар' }</title>
            </Helmet>

            <div className="prod_page_container">

                <Modal show={show} onHide={handleClose} size='lg'>
                    <Slider item={data[id]} type={type} id={id}/>
                </Modal>



                <div className="prod_back_link">
                    <Link to={`/catalog/${type}`}>← Назад до каталогу</Link>
                </div>

                {loading? 

                    <div style={{textAlign: 'center'}}>
                        <Spinner animation="border" role="status" >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                        : 
                        
                        error? <Error/> :

                    <div className="prod_container">
                        <div className="prod_img" >
                            <Slider item={data[id]} type={type} id={id} handleShow={handleShow}/>
                        </div>

                        <div className="prod_info">
                            <div className="header">
                                <h3>{data[id]?.name}</h3>
                                <p>{data[id]?.descr}</p>
                                {data[id]?.char?.map((item ,i) => {
                                    return <p key={i}>{item}</p>
                                })}
                                <p><b>Виміри:</b> {data[id]?.size}</p>
                            </div>
                            
                            <div className="price">
                                {data[id]?.discount ? 
                                    <div className="old">
                                    <p className="old_price">{`${data[id]?.price}  ₴`}</p>
                                    <p className="new_price">{`${data[id]?.discountPrice}  ₴`}</p>
                                    </div>
                                    :
                                    <p>{`${data[id]?.price}  ₴`}</p>
                                }
                                
                                <CustomButton action={()=>setOrder(true)} text="замовити"/>
                            </div>
                        </div>   
                    </div>
                }
            </div>

            <OrderForm setOrder={setOrder} order={order} id={id} descr={data[id]?.descr}/>
        </>
    )
}

export default SingleProductPage;