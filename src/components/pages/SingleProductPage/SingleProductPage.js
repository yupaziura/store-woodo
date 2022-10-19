import { products } from "../../../db/products";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../Button/Button";

import './SingleProductPage.scss';

const SingleProductPage = ({rootType, rootId}) => {

    const {type, id} = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        if(id == 'undefined'){
            navigate("/notfound", { replace: true });
        }
    }, [id, type, navigate])


    return (

        <div className="prod_page_container">
            <div className="prod_back_link">
                <Link to={`/catalog/${type}`}>← Back to catalog</Link>
            </div>

            <div className="prod_container">
                <div className="prod_img">
                    <img src={products[type][id]?.img} alt="" />
                </div>

                <div className="prod_info">
                    <div className="header">
                        <h3>{products[type][id]?.name}</h3>
                        <p>{products[type][id]?.descr}</p>
                    </div>
                    
                    <div className="price">
                        <p>{`${products[type][id]?.price}  ₴`}</p>
                        <CustomButton text="create order"/>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SingleProductPage;