import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {ReactComponent as ReactLogo} from '../../img/logo.svg';
import CustomButton from '../Button/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SocialMedia from '../SocialMedia/SocialMedia';

import './Header.scss';


const Header = (props) => {
    const buttonAction = () => {
        props.setShow(true)
    }

    const expand = 'lg';
    return (
        <>
            <Navbar bg="light" variant="light" collapseOnSelect expand={`${expand}`}>
                <Container fluid={expand}>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <div className='me-5' style={{width: '120px'}}><ReactLogo/></div>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >

                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3" >
                                
                                <Nav.Item  className='me-3 mt-3'>
                                    <NavDropdown  title="Каталог" id="collasible-nav-dropdown">
                                        <LinkContainer  to="/catalog"><NavDropdown.Item>Каталог</NavDropdown.Item></LinkContainer>
                                        <NavDropdown.Divider />
                                        <LinkContainer to="/catalog/armchairs"><NavDropdown.Item >Крісла</NavDropdown.Item></LinkContainer>
                                        <LinkContainer to="/catalog/tables"><NavDropdown.Item >Столи</NavDropdown.Item></LinkContainer>
                                        <LinkContainer to="/catalog/accessoires"><NavDropdown.Item>Аксесуари</NavDropdown.Item></LinkContainer>
                                    </NavDropdown>
                                </Nav.Item>

                                <Nav.Item className='me-3 mt-3'>
                                    <LinkContainer to="/contacts"  >
                                        <Nav.Link style={{alignSelf: 'center'}}>
                                            <Nav.Item >
                                                Контакти
                                            </Nav.Item>
                                        </Nav.Link>
                                    </LinkContainer>
                                </Nav.Item>
                                    
                                <div className='mt-3'  style={{marginRight: 'auto'}}>
                                    <CustomButton height={'40px'} padding={'5px 15px'} action={buttonAction} text={'конструктор'} color={'#adbb5b'}/>
                                </div>
                            </Nav>

                            <div className='mt-3' >
                                <Nav.Item>
                                    <SocialMedia/>
                                </Nav.Item>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>
        </>
    )
}

export default Header;