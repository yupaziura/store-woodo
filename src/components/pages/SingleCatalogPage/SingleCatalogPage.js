import { useEffect, useState } from "react";

import ProductCard from "../../ProductCard/ProductCard";

import './SingleCatalogPage.scss';


const SingleCatalogPage = (props) => {

    const [data, setData] = useState([]);

    const onLoaded = (data) => {
        setData(data.sort((a,b) => a.id - b.id) );
        // console.log(data)
    }

    const onRequest = () => {
        props.getItem().then(onLoaded);
    }


    useEffect(() => {onRequest()}, [props.typeName])



    return (
        <div className="single_catalog_container">
            <h3 className="single_catalog_title">{props.typeName}</h3>

            <div className="single_catalog">

            {data.map((item, i) => {
                return <ProductCard setRootId={props.setRootId}  key={item.id} item={item} type={props.type} num={i}/>
            })}
        </div>

        </div>
    )
}


export default SingleCatalogPage;