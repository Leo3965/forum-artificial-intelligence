import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {BookHalf} from "react-bootstrap-icons";

const Header = () => {
    const theme = "dark"; // light-dark

    return (
        <>
            <Navbar bg={theme} variant={theme}>
                <Container>
                    <Navbar.Brand>
                        <BookHalf/>
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;