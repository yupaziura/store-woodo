import './CatalogItem.scss';

const CatalogItem = (props) => {
    return (
        <div className='catalog_item'>
            <img src={props.img} alt="" />
            <h4 className='catalog_item_title'>{props.title}</h4>
        </div>
    )
}

export default CatalogItem;