import { Link } from "react-router-dom";
import { products } from "../../db/products";
import { useState } from "react";

import Slider from "../Carusel/Carusel";
import CustomButton from "../Button/Button";
import OrderForm from "../Forms/OrderForm";

import './ProductCard.scss';

const ProductCard = ({item, type, setRootId, num, img}) => {

    const [order, setOrder] = useState(false)


    return (
        
        <>
            <div className="card_link" >
                <div className="card_custom">
                    {/* <img src={item.img} alt="" /> */}
                    <div className="card_img">
                        <Slider item={item} type={type}  />
                    </div>
                    <div className="card_data">
                        <div className="card_dataText">
                            <h4 className="card_title">{item.name}</h4>
                            {item.discount? 
                                <>
                                    <p className="card_text card_price card_price_old"><i>{`${item.price} ₴`}</i></p>
                                    <p className="card_text card_price card_price_new"><b>{`${item.discountPrice} ₴`}</b></p>
                                </>
                                : 
                                <p className="card_text card_price"><i>{`${item.price} ₴`}</i></p>
                            }
                            
                            <p className="card_text card_descr">{item.descr}</p>
                        </div>
                        
                        <div className="card_navigation">
                            
                            <CustomButton action={()=>setOrder(true)} text="замовити" color='#adbb5b' height={'fit-content'} padding={10}/>
                            <div>
                                <Link  onClick={()=>setRootId(num)} to={`/catalog/${type}/${item.id}`}> детальніше →</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <OrderForm setOrder={setOrder} order={order} id={item.id} descr={item.descr}/>
        </>
    )
}

export default ProductCard;