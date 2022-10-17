import { Link } from "react-router-dom";

const ProductCard = ({item, type, setRootId, num}) => {
    return (
        <Link onClick={()=>setRootId(num)} to={`/catalog/${type}/${item.id}`}>
            <div className="">
                Name: {item.name}
                Description: {item.descr}
                Price: {item.price}
            </div>
        </Link>
    )
}

export default ProductCard;