import React, { Component } from "react";
import { Navbar, NavbarBrand, NavLink,Collapse,NavbarToggler, NavItem,Nav } from "reactstrap";


class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      images:[{
        id:0,
        name:"Jumbo Image",
        image:'../images/jumboImg.png'
      }]
    };
  }
  render(){
   
    return(
      <React.Fragment>
      <div class="container-fluid bg-light text-dark p-5">
      <div class="container bg-light p-5">
      <h1 class="display-4 fw-bold">Data Structure & Algorithms</h1>
   <img src={this.state.images.image} height={200} width={200}/>
  </div>
</div>
      <Navbar  sticky="top">
        <div className="container" >
          <NavbarBrand href="/">LearnWithEase</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse   navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink href="/" >DataStructure</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          
           <NavLink href="/" >DataStructure</NavLink>
          <NavLink href="/">Algorithms</NavLink>
         </div>
         </Navbar>
         </React.Fragment>
    
     
      
    );
        }
}

export default Header;