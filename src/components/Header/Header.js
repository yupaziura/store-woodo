import {Link, NavLink} from 'react-router-dom';


const Header = () => {
    return (
        <>
            <Link to="/">Main</Link>
                <NavLink to="/catalog">Catalog</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
        </>
    )
}

export default Header;