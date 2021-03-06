import React, { useState, useContext} from 'react'
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button }  from 'react-bootstrap'
import Data from './Data'
import Details from './Detail'
import Cart from './Cart'
import axios from 'axios'
import { Link, Route, Switch, useHistory } from 'react-router-dom'



export let inventoryContext = React.createContext()

function App() {

  let [guitar , guitarChange] = useState(Data)
  let [inventory, inventoryChange] = useState([9,10,11])
  let history = useHistory()
  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">GuitarShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
        <Route exact path="/">
        <div className="jumbotron">
            <h1>30% SALE</h1>
              <p>FENDER MUSICAL INSTRUMENTS CORPORATION
                 THE WORLD'S LEADING GUITAR MANUFACTURER</p>
                <p>
              <Button variant="primary">Shop Now</Button>
            </p>
        </div>
        <div className="container">

          <inventoryContext.Provider value={inventory}>
          <div className="row">
            {
              guitar.map((value, index)=>
              {
                return  <Card guitar={guitar[index]} index={index} key={index} />
              })
            }
          </div>          
          </inventoryContext.Provider>

          {/* <button className="btn btn-primary" onClick={()=>
            {
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                guitarChange([...guitar , ...result.data])
              })
              .catch(()=>{
                alert('?????????')
              })
            }}>?????????</button> */}
        </div>
        </Route>
        <inventoryContext.Provider value={inventory}>
        <Route path="/detail/:id">
          <Details guitar={guitar} inventory={inventory} inventoryChange={inventoryChange}></Details>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        </inventoryContext.Provider>
        </Switch> 
    </div>
  )
}


  const Card = (props) =>
  { 

    let inventory = useContext(inventoryContext)
    let history = useHistory()

    return(
          <div className="col-md-4" onClick={()=>{ history.push('/detail/' + props.index)}}>
            <img src={props.guitar.src} height="70%" alt="????????????" />
            <h4>{props.guitar.title}</h4>
            <p>{props.guitar.content}</p>
            <p><strong>{props.guitar.price}</strong></p>
          </div>
    )
  }

  export default App;
