import { Link } from "react-router-dom";

const CatalogPage = ({setRootType}) => {
    
    return (
        <>
            Catalog
            <Link onClick={()=>setRootType('armchairs')} to="/catalog/armchairs" >armchairs</Link>
            <Link onClick={()=>setRootType('tables')} to="/catalog/tables"  >tables</Link>
            <Link onClick={()=>setRootType('accessoires')} to="/catalog/accessoires">accessoires</Link>
        </>
    )
}


export default CatalogPage;