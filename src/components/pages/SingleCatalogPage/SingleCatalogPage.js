import { products } from "../../../db/products";
import { useParams } from "react-router-dom";

import ProductCard from "../../ProductCard/ProductCard";


const SingleCatalogPage = (props) => {

    const type = useParams();
    console.log(type)
    return (
        <>
            {products[props.type].map((item, i) => {
                return <ProductCard setRootId={props.setRootId} key={item.id} item={item} type={props.type} num={i}/>
            })}
        </>
    )
}


export default SingleCatalogPage;