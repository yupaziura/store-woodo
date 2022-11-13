import { products } from "../../../db/products";

import ProductCard from "../../ProductCard/ProductCard";

import './SingleCatalogPage.scss';


const SingleCatalogPage = (props) => {

    return (
        <div className="single_catalog_container">
            <h3 className="single_catalog_title">{props.typeName}</h3>

            <div className="single_catalog">

            {products[props.type].map((item, i) => {
                return <ProductCard setRootId={props.setRootId}  key={item.id} item={item} type={props.type} num={i}/>
            })}
        </div>

        </div>
    )
}


export default SingleCatalogPage;