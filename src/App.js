import React from 'react'
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button}  from 'react-bootstrap'
function App() {
  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">GuitarShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          <div className="jumbotron">
            <h1>50% SALE</h1>
              <p>FENDER MUSICAL INSTRUMENTS CORPORATION
                 THE WORLD'S LEADING GUITAR MANUFACTURER</p>
                <p>
              <Button variant="primary">Shop Now</Button>
            </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0140262326_fen_ins_frt_1_rr.jpg" height="70%" alt="" />
              <h4>상품명</h4>
              <p>상품설명 & 가격</p>
            </div>
            <div className="col-md-4">
              <img src="https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0378051566_sqr_ins_frt_1_rr.jpg" height="70%" alt="" />
              <h4>상품명</h4>
              <p>상품설명 & 가격</p>
            </div>
            <div className="col-md-4">
              <img src="https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0378003502_sqr_ins_frt_1_rr.jpg" height="70%" alt="" />
              <h4>상품명</h4>
              <p>상품설명 & 가격</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App;
