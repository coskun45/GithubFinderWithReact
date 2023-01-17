import React from 'react';
import '../index';
import {BrowserRouter, Route, Switch,Link,NavLink} from 'react-router-dom'


const Nav=()=>(
  
  <nav>
    <NavLink exact to="/" activeClassName='active'>HOME</NavLink> |
    <NavLink to="/contact" activeClassName='active'>CONTACT</NavLink> |
    <NavLink to="/products" activeClassName='active'>PRODUCTS</NavLink>
  </nav>
  
 
)
const Header=()=>(
  <header>
  <h1>Github Finder</h1>
  </header>
 
)

const HomePage=()=>(
  <>
   <div>HOMEPAGE</div>
  
  </>
 
)
const ContactPage=()=>(
  <>
  <div>ContactPAGE</div>
   
  </>
  
)
const PrdoductPage=()=>(
  <>
  <div>ProductPAGE</div>
   
  </>
  
)
const Notfound=()=>(
  <>
  <div>404 Notfound</div>
  
  </>
  
)
const PrdoductDetailsPage=()=>(
    <>
    <div>PrdoductDetailsPage</div>
    
    </>
    
  )


const AppRouter=()=>(

<BrowserRouter>
  <Header></Header>
  <Nav></Nav>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/contact" component={ContactPage}/>
      <Route path="/products" component={PrdoductPage}/>
      <Route path="/products/:id" component={PrdoductDetailsPage}/>
      <Route component={Notfound}/>

    </Switch>
    
  </BrowserRouter>

);
export default AppRouter;

  


