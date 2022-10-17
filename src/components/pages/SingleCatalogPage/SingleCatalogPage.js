import ProductCard from "../../ProductCard/ProductCard";

import { products } from "../../../db/products";

const SingleCatalogPage = (props) => {
    return (
        <>
            {products[props.type].map((item) => {
                return <ProductCard key={item.id} item={item}/>
            })}
        </>
    )
}


export default SingleCatalogPage;