import React, { useState } from 'react'
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button }  from 'react-bootstrap'
import Data from './data'

import { Link, Route, Switch } from 'react-router-dom'
function App() {

  let [guitar , guitarChange] = useState(Data)

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
        <Route exact path="/">
        <div className="jumbotron">
            <h1>20% SALE</h1>
              <p>FENDER MUSICAL INSTRUMENTS CORPORATION
                 THE WORLD'S LEADING GUITAR MANUFACTURER</p>
                <p>
              <Button variant="primary">Shop Now</Button>
            </p>
        </div>
        <div className="container">
          <div className="row">
            {
              guitar.map((value, index)=>
              {
                return  <Card guitar={guitar[index]} index={index} key={index} />
              })
            }
          </div>
        </div>
        </Route>
        <Route path="/detail">
          <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
      </div> 
        </Route>
    </div>
  )
}

const Card = (props) =>
{
  return(
        <div className="col-md-4">
          <img src={props.guitar.src} height="70%" alt="팬더기타" />
          <h4>{props.guitar.title}</h4>
          <p>{props.guitar.content}</p>
          <p><strong>{props.guitar.price}</strong></p>
        </div>
  )
}
  export default App;
