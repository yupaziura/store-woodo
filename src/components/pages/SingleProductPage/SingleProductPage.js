import { products } from "../../../db/products";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

import CustomButton from "../../Button/Button";
import Modal from 'react-bootstrap/Modal';
import Slider from "../../Carusel/Carusel";

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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





    return (

        <div className="prod_page_container">

            <Modal show={show} onHide={handleClose} size='lg'>
                <Slider products={products} type={type} id={id}/>
            </Modal>



            <div className="prod_back_link">
                <Link to={`/catalog/${type}`}>← Back to catalog</Link>
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
                        <p>{`${products[type][id]?.price}  ₴`}</p>
                        <CustomButton text="замовити"/>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SingleProductPage;