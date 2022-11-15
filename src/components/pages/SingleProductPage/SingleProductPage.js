import { products } from "../../../db/products";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import CustomButton from "../../Button/Button";
import Modal from 'react-bootstrap/Modal';
import Slider from "../../Carusel/Carusel";
import OrderForm from "../../Forms/OrderForm";

import './SingleProductPage.scss';

const SingleProductPage = ({rootType, rootId}) => {

    const {type, id} = useParams();
    const navigate = useNavigate();

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
            <div className="prod_page_container">

                <Modal show={show} onHide={handleClose} size='lg'>
                    <Slider products={products} type={type} id={id}/>
                </Modal>



                <div className="prod_back_link">
                    <Link to={`/catalog/${type}`}>← Назад до каталогу</Link>
                </div>

                <div className="prod_container">
                    <div className="prod_img" >
                        <Slider products={products} type={type} id={id} handleShow={handleShow}/>
                    </div>

                    <div className="prod_info">
                        <div className="header">
                            <h3>{products[type][id]?.name}</h3>
                            <p>{products[type][id]?.descr}</p>
                            {products[type][id]?.char.map((item ,i) => {
                                return <p key={i}>{item}</p>
                            })}
                            <p><b>Виміри:</b> {products[type][id]?.size}</p>
                        </div>
                        
                        <div className="price">
                            {products[type][id]?.discount ? 
                                <div className="old">
                                <p className="old_price">{`${products[type][id]?.price}  ₴`}</p>
                                <p className="new_price">{`${products[type][id]?.discountPrice}  ₴`}</p>
                                </div>
                                :
                                <p>{`${products[type][id]?.price}  ₴`}</p>
                            }
                            
                            <CustomButton action={()=>setOrder(true)} text="замовити"/>
                        </div>
                    </div>
                </div>
            </div>

            <OrderForm setOrder={setOrder} order={order} id={id} descr={products[type][id]?.descr}/>
        </>
    )
}

export default SingleProductPage;