import { Link } from "react-router-dom";

const CatalogPage = () => {
    return (
        <>
            Catalog
            <Link to="/catalog/armchairs" >armchairs</Link>
            <Link to="/catalog/tables"  >tables</Link>
            <Link to="/catalog/accessoires">accessoires</Link>
        </>
    )
}


export default CatalogPage;