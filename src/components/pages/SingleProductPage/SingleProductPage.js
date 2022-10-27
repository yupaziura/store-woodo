import { products } from "../../../db/products";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

import CustomButton from "../../Button/Button";

import './SingleProductPage.scss';

const SingleProductPage = ({rootType, rootId}) => {

    const {type, id} = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        if(id == 'undefined'){
            navigate("/notfound", { replace: true });
        }
    }, [id, type, navigate]);

    const [indexSl, setIndexSl] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndexSl(selectedIndex);
    };


    return (

        <div className="prod_page_container">
            <div className="prod_back_link">
                <Link to={`/catalog/${type}`}>← Back to catalog</Link>
            </div>

            <div className="prod_container">
                <div className="prod_img">
                    {/* <img src={products[type][id]?.img} alt="" /> */}
                    <Carousel variant="dark" style={{maxWidth:'100%', paddingLeft:'5px'}} activeIndex={indexSl} onSelect={handleSelect} interval={null}>
                        {products[type][id]?.imgArray?.map((item, i)=> {
                            return (
                                
                                <Carousel.Item key={i}>
                                    <img
                                    className="d-block w-100"
                                    src={item}
                                    alt="First slide"
                                    style={{maxWidth:'100%', zIndex: '-1'}}
                                    />
                                </Carousel.Item>
                                
                            )
                        })}
                       
                    </Carousel>
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