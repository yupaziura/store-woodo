import { products } from "../../../db/products";

import ProductCard from "../../ProductCard/ProductCard";

import './SingleCatalogPage.scss';


const SingleCatalogPage = (props) => {

    var Airtable = require('airtable');
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: 'keyGg2EIF6ewnOrh6'
    });
    var base = Airtable.base('appwJpTH0iQwh6Znk');

    base('armchairs').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            console.log('Retrieved', record.get('name'));
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });

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