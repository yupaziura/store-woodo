import { Link } from "react-router-dom";

import CatalogItem from "../../CatalogItem/CatalogItem";

import './CatalogPage.scss';


const CatalogPage = ({setRootType}) => {
    
    return (
        <div className={'catalog_container'}>
            <h3 className="catalog_title">каталог</h3>

            <div className="catalog">
                <Link onClick={()=>setRootType('armchairs')} to="/catalog/armchairs" >
                    <CatalogItem img={require('../../../img/catalog/catalog-armchair.png')} title="Крісла"/>
                </Link>
                <Link onClick={()=>setRootType('tables')} to="/catalog/tables"  >
                    <CatalogItem img={require('../../../img/catalog/catalog-table.png')} title="Столи"/>
                </Link>
                <Link onClick={()=>setRootType('accessoires')} to="/catalog/accessoires">
                    <CatalogItem img={require('../../../img/catalog/catalog-access.png')} title="Аксесуари"/>
                </Link>
            </div>

        </div>
    )
}


export default CatalogPage;