import { products } from "../../../db/products";
import { Link, useParams } from "react-router-dom";

const SingleProductPage = ({rootType, rootId}) => {

    const {type, id} = useParams();
    return (

        <>
        <Link to={`/catalog/${type}`}> Back to catalog</Link>
        <p>{products[type][id].name}</p>
        <p>{products[type][id].descr}</p>
        <p>{products[type][id].price}</p>

        </>
    )
}

export default SingleProductPage;