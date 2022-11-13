import { Link } from "react-router-dom";

import './ProductCard.scss';

const ProductCard = ({item, type, setRootId, num, img}) => {
    return (
        
            <Link className="card_link" onClick={()=>setRootId(num)} to={`/catalog/${type}/${item.id}`}>
                <div className="card_custom">
                    <img src={item.img} alt="" />
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