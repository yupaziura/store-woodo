import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {ReactComponent as ReactLogo} from '../../img/logo.svg';
import CustomButton from '../Button/Button';
import Stack from 'react-bootstrap/Stack';
import SocialMedia from '../SocialMedia/SocialMedia';


const Header = (props) => {
    const buttonAction = () => {
        props.setShow(true)
    }
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container >
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <div className='me-5' style={{width: '120px'}}><ReactLogo/></div>
                        </Navbar.Brand>
                    </LinkContainer>
                    

                    <Nav className="me-auto" style={{alignSelf: 'end', alignItems: 'end'}} >
                        
                        <Stack direction="horizontal" gap={3}>
                            <NavDropdown title="Catalog" id="collasible-nav-dropdown">
                                    <LinkContainer to="/catalog"><NavDropdown.Item>Catalog</NavDropdown.Item></LinkContainer>
                                    <NavDropdown.Divider />
                                    <LinkContainer to="/catalog/armchairs"><NavDropdown.Item >Armchairs</NavDropdown.Item></LinkContainer>
                                    <LinkContainer to="/catalog/tables"><NavDropdown.Item >Tables</NavDropdown.Item></LinkContainer>
                                    <LinkContainer to="/catalog/accessoires"><NavDropdown.Item>Accessoires</NavDropdown.Item></LinkContainer>
                            </NavDropdown>

                            <div>
                                <LinkContainer to="/contacts" >
                                    <Nav.Link style={{alignSelf: 'center'}}>
                                        <Nav.Item >
                                            Contacts
                                        </Nav.Item>
                                    </Nav.Link>
                                </LinkContainer>
                            </div>
                            
                            <div className='ms-5'>
                                <CustomButton height={'40px'} padding={'5px 15px'} action={buttonAction} text={'constructor'} color={'#adbb5b'}/>
                            </div>



                        </Stack>

                        
                    </Nav>

                    <Navbar.Collapse className="  justify-content-end" >
                        <SocialMedia/>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    )
}

export default Header;