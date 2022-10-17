import { products } from "../../../db/products";

import ProductCard from "../../ProductCard/ProductCard";


const SingleCatalogPage = (props) => {
    return (
        <>
            {products[props.type].map((item, i) => {
                return <ProductCard setRootId={props.setRootId} key={item.id} item={item} type={props.type} num={i}/>
            })}
        </>
    )
}


export default SingleCatalogPage;