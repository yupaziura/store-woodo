import { useEffect, useState, useCallback } from "react";
import {Helmet} from "react-helmet-async";

import ProductCard from "../../ProductCard/ProductCard";
import { Spinner } from "react-bootstrap";
import Sort from '../../Sort/Sort';
import Filter from '../../Filter/Filter';

import './SingleCatalogPage.scss';


const SingleCatalogPage = (props) => {

    const [data, setData] = useState([]);
    const [type, setType] = useState(2);

    console.log(type)

    const onLoaded = (data) => {
        setData(data.sort((a,b) => a.id - b.id) );
    }

    const onRequest = () => {
        props.getItem().then(onLoaded);
    }


    useEffect(() => {onRequest()}, [props.typeName]);

    const selectPrice = (discount, price) => {
        return discount === 0? price : discount
    }

    const sortPrice = (a, b) => {
        switch (type){
            case 0:
                return selectPrice(a.discountPrice, a.price) - selectPrice(b.discountPrice, b.price)
            case 1:
                return selectPrice(b.discountPrice, b.price) - selectPrice(a.discountPrice, a.price)
            case 2:
                return a.id - b.id
            default:
                return a.id - b.id
        }
    }


    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Catalog"
                />
                <title>Каталог</title>
            </Helmet>

            <div className="single_catalog_container">
                <h3 className="single_catalog_title">{props.typeName}</h3>

                {props.loading? 

                <div style={{textAlign: 'center'}}>
                    <Spinner animation="border" role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                    : 
                    
                    props.error? <h5>{'Вибачте, сталася помилка :('}</h5> : 

                    <div >
                        <Sort setType={setType}/>
                        <div className="single_catalog_page">
                            <div className="single_catalog">
                                {data.sort(sortPrice).map((item, i) => {
                                    return <ProductCard setRootId={props.setRootId}  key={item.id} item={item} type={props.type} num={i}/>
                                })}
                            </div>
                            <Filter/>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}


export default SingleCatalogPage;