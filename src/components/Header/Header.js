import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {ReactComponent as ReactLogo} from '../../img/logo.svg';


const Header = () => {
    return (
        <>
        <Navbar bg="light" variant="light">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <div style={{width: '120px'}}><ReactLogo/></div>
                    </Navbar.Brand>
                </LinkContainer>
                

                <Nav className="me-auto" style={{alignSelf: 'end'}}>
                    
                    <NavDropdown title="Catalog" id="collasible-nav-dropdown">
                            <LinkContainer to="/catalog"><NavDropdown.Item>Catalog</NavDropdown.Item></LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/catalog/armchairs"><NavDropdown.Item >Armchairs</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/catalog/tables"><NavDropdown.Item >Tables</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/catalog/accessoires"><NavDropdown.Item>Accessoires</NavDropdown.Item></LinkContainer>
                    </NavDropdown>

                    <LinkContainer to="/contacts" >
                        <Nav.Link style={{alignSelf: 'center'}}>
                            <Nav.Item >
                                Contacts
                            </Nav.Item>
                        </Nav.Link>
                    </LinkContainer>
                </Nav>

            </Container>
        </Navbar>
        </>
    )
}

export default Header;