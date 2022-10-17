import { products } from "../../../db/products";

const SingleProductPage = ({rootType, rootId}) => {
    return (

        <>
        <p>{products[rootType][rootId].name}</p>
        <p>{products[rootType][rootId].descr}</p>
        <p>{products[rootType][rootId].price}</p>

        </>
    )
}

export default SingleProductPage;