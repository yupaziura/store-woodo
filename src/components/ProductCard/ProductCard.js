const ProductCard = ({item}) => {
    return (
        <>
        <div className="">
            Name: {item.name}
            Description: {item.descr}
            Price: {item.price}
        </div>
        </>
    )
}

export default ProductCard;