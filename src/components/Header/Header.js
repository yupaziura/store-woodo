import {Link, NavLink} from 'react-router-dom';


const Header = () => {
    return (
        <>
            <Link to="/">Main</Link>
            <NavLink>
                <Link to="/catalog">Catalog</Link>
                <Link to="/contacts">Contacts</Link>
            </NavLink>
        </>
    )
}

export default Header;