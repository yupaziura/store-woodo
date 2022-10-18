import { Link } from "react-router-dom";

import CatalogItem from "../../CatalogItem/CatalogItem";

import './CatalogPage.scss';


const CatalogPage = ({setRootType}) => {
    
    return (
        <div className="catalog">
            <Link onClick={()=>setRootType('armchairs')} to="/catalog/armchairs" >
                <CatalogItem img={require('../../../img/catalog/catalog-armchair.png')} title="Armchair"/>
            </Link>
            <Link onClick={()=>setRootType('tables')} to="/catalog/tables"  >
                <CatalogItem img={require('../../../img/catalog/catalog-table.png')} title="Table"/>
            </Link>
            <Link onClick={()=>setRootType('accessoires')} to="/catalog/accessoires">
                <CatalogItem img={require('../../../img/catalog/catalog-access.png')} title="Accessoire"/>
            </Link>
        </div>
    )
}


export default CatalogPage;