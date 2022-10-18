import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    return (
        <>
        <Navbar bg="light" variant="light">
            <Container>
                <LinkContainer to="/"><Navbar.Brand>Main</Navbar.Brand></LinkContainer>
                

                <Nav className="me-auto">
                    <Nav.Link>
                        <NavDropdown title="Catalog" id="collasible-nav-dropdown">
                                <LinkContainer to="/catalog"><NavDropdown.Item>Catalog</NavDropdown.Item></LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/catalog/armchairs"><NavDropdown.Item >Armchairs</NavDropdown.Item></LinkContainer>
                                <LinkContainer to="/catalog/tables"><NavDropdown.Item >Tables</NavDropdown.Item></LinkContainer>
                                <LinkContainer to="/catalog/accessoires"><NavDropdown.Item>Accessoires</NavDropdown.Item></LinkContainer>
                        </NavDropdown>
                    </Nav.Link>



                    <Nav.Link style={{alignSelf: 'center'}}>
                        <LinkContainer to="/contacts" >
                            <Nav.Item >
                                Contacts
                            </Nav.Item>
                        </LinkContainer>
                    </Nav.Link>
                </Nav>

            </Container>
        </Navbar>
        </>
    )
}

export default Header;