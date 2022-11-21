import { useEffect, useState } from "react";
import {Helmet} from "react-helmet-async";

import ProductCard from "../../ProductCard/ProductCard";
import { Spinner } from "react-bootstrap";

import './SingleCatalogPage.scss';


const SingleCatalogPage = (props) => {

    const [data, setData] = useState([]);

    const onLoaded = (data) => {
        setData(data.sort((a,b) => a.id - b.id) );
    }

    const onRequest = () => {
        props.getItem().then(onLoaded);
    }


    useEffect(() => {onRequest()}, [props.typeName]);



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

                    <div className="single_catalog">

                        {data.map((item, i) => {
                            return <ProductCard setRootId={props.setRootId}  key={item.id} item={item} type={props.type} num={i}/>
                        })}
                    </div>
                }

            </div>
        </>
    )
}


export default SingleCatalogPage;