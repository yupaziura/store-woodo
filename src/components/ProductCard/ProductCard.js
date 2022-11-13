import { Link } from "react-router-dom";
import { products } from "../../db/products";
import { useState } from "react";

import Slider from "../Carusel/Carusel";

import './ProductCard.scss';

const ProductCard = ({item, type, setRootId, num, img}) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    return (
        
            <Link className="card_link" onClick={()=>setRootId(num)} to={`/catalog/${type}/${item.id}`}>
                <div className="card_custom">
                    {/* <img src={item.img} alt="" /> */}
                    <Slider products={products} type={type} id={item.id} handleShow={handleShow}/>
                    <div className="card_data">
                        <h4 className="card_title">{item.name}</h4>
                        {item.discount? 
                            <>
                                <p className="card_text card_price card_price_old"><i>{`${item.price} ₴`}</i></p>
                                <p className="card_text card_price card_price_new"><b>{`3 000₴`}</b></p>
                            </>
                            : 
                            <p className="card_text card_price"><i>{`${item.price} ₴`}</i></p>
                        }
                        
                        <p className="card_text card_descr">{item.descr}</p>
                    </div>
                </div>

            </Link>
    )
}

export default ProductCard;