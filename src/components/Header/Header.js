import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {ReactComponent as ReactLogo} from '../../img/logo.svg';
import CustomButton from '../Button/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SocialMedia from '../SocialMedia/SocialMedia';
import Lights from '../XmasLights/XmasLights';

import './Header.scss';


const Header = (props) => {

    const [close, setClose] = useState(false);

    const buttonAction = () => {
        props.setShow(true);
        if(window.innerWidth <= 992) {
            setClose((close)=> !close);
        }
    }

    const toggleBar = () => {
        if(window.innerWidth <= 992) {
            setClose((close)=> !close);   
        }
    }

    const expand = 'lg';
    return (
        <>
            <Navbar className='margin_nav' bg="light" variant="light" collapseOnSelect expand={`${expand}`}>
                <Container fluid={expand}>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <div className='me-5' style={{width: '120px'}}><ReactLogo/></div>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle onClick={toggleBar} aria-controls={`offcanvasNavbar-expand-${expand}`} />

                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        show={close}
                        onHide={toggleBar}
                    >

                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Меню
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className=" flex-grow-1 pe-3"  style={{alignItems: 'center'}}>
                                
                                <Nav.Item  className='me-3 ' >
                                    <NavDropdown  title="Каталог" id="collasible-nav-dropdown">
                                        <LinkContainer onClick={toggleBar} to="/catalog"><NavDropdown.Item>Каталог</NavDropdown.Item></LinkContainer>
                                        <NavDropdown.Divider />
                                        <LinkContainer onClick={toggleBar} to="/catalog/armchairs"><NavDropdown.Item >Крісла</NavDropdown.Item></LinkContainer>
                                        <LinkContainer onClick={toggleBar} to="/catalog/tables"><NavDropdown.Item >Столи</NavDropdown.Item></LinkContainer>
                                        <LinkContainer onClick={toggleBar} to="/catalog/accessoires"><NavDropdown.Item>Аксесуари</NavDropdown.Item></LinkContainer>
                                    </NavDropdown>
                                </Nav.Item>

                                <Nav.Item className='me-3 ' onClick={toggleBar}>
                                    <LinkContainer to="/contacts"  >
                                        <Nav.Link style={{alignSelf: 'center'}}>
                                            <Nav.Item >
                                                Контакти
                                            </Nav.Item>
                                        </Nav.Link>
                                    </LinkContainer>
                                </Nav.Item>


                                <Nav.Item className='me-3 ' onClick={toggleBar}>
                                    <LinkContainer to="/promotion"  >
                                        <Nav.Link style={{alignSelf: 'center'}}>
                                            <Nav.Item >
                                                <div className="prom">
                                                    Акції
                                                    <img style={{height: '32px', width: 'auto', marginLeft: '10px'}} src={require('../../img/icons/xmas.png')} alt="" />
                                                </div>
                                            </Nav.Item>
                                        </Nav.Link>
                                    </LinkContainer>
                                </Nav.Item>


                                    
                                <Nav.Link>  
                                    <Nav.Item>
                                    <div className=''  style={{marginRight: 'auto'}}>
                                        <CustomButton height={'40px'} padding={'5px 15px'} action={buttonAction} text={'конструктор'} color={'#adbb5b'}/>
                                    </div>
                                    </Nav.Item>
                                </Nav.Link>
                            </Nav>

                            <div className='' >
                                <Nav.Item onClick={toggleBar}>
                                    <SocialMedia/>
                                </Nav.Item>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>
            <Lights/>
        </>
    )
}

export default Header;