import { products } from "../../../db/products";
import { Link } from "react-router-dom";

const SingleProductPage = ({rootType, rootId}) => {
    return (

        <>
        <Link to={`/catalog/${rootType}`}> Back to catalog</Link>
        <p>{products[rootType][rootId].name}</p>
        <p>{products[rootType][rootId].descr}</p>
        <p>{products[rootType][rootId].price}</p>

        </>
    )
}

export default SingleProductPage;