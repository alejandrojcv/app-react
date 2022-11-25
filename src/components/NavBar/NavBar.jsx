import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CartWidget/CartWidget';
import Notif from '../Notif/Notif'
function NavBar() {
  return (
    <Navbar bg="light" expan
    d="lg">
    
      <Container fluid>
        <Navbar.Brand href="#">   Tienda Rollers</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Freeskates</Nav.Link>
            <Nav.Link href="#action3">Aggressive</Nav.Link>
            <Nav.Link href="#action4">Fitness</Nav.Link>
            <Nav.Link href="#action5">Contact</Nav.Link>
            <Nav.Link href="#action6">About Us</Nav.Link>
          </Nav>
          <a href="#action">
            <CarWidget />
          </a>
        <Notif/>
        <Navbar.Brand>    </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Products Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;