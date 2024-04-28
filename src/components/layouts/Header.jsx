import React from 'react'
// import Search from './Search'
import {useEffect} from 'react';
import { Fragment } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Image, NavbarBrand} from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import logo from "../pages/Images/Images/logo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { toast } from 'react-toastify';
import { logout } from '../../actions/userActions';
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

const {isAuthenticated, user} = useSelector(state => state.authState);
const {items:cartItems} = useSelector(state => state.cartState)
const dispatch = useDispatch();
const navigate = useNavigate()
const logoutHandler = () => {
dispatch(logout);
}
// useEffect(()=>{
//   if(logout){
//     toast('Logout successfully',{
//       type: 'success',
//   })
//      return navigate('/')
//   }
// },[logout, navigate])


  return (
    <Fragment>
     <Navbar expand="lg" className="bg-body-tertiary">
      
    <Navbar.Brand><img src={logo} alt="" className="pt-2 pb-2" width={225} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
          <Nav >
           <Link to="/" className="pads mt-2">Home</Link>

<div  className=" dropdown pad mt-2">
    <span  >Pages <FaCaretDown  style={{margin : "-5px 0px 0px" }}/> </span>
    <div className="dropdown-content">
    <Link to="/about" className="drop">About</Link>
    <br/>
    <Link to="/testimonial" className="drop">Testimonial</Link>
    </div>
    </div>
    <Link to="/products"  className="pad mt-2">Products</Link>
      <Link to="/blog" className="pad mt-2">Blog</Link>
      <Link to="/contact" className="pad mt-2">Contact</Link>
  <Fragment>
  {isAuthenticated ? (
    <Dropdown className='dropdown pad d-inline'>
      <Dropdown.Toggle variant='default text-dark pr-5' id='dropdown-basic'>
        <figure className='avatar avatar-nav'>
          <Image width="50px" src={user.avatar??'./images/default.png'} />
        </figure>
        <span className='text-dark'>{user.name}</span>
      </Dropdown.Toggle>
      <DropdownMenu>
      {user.role === 'user' &&<Dropdown.Item onClick={()=>{navigate('/myprofile')}} className='text-dark'>Profile</Dropdown.Item>}
      {user.role === 'admin' &&<Dropdown.Item onClick={()=>{navigate('/admin/dashboard')}} className='text-dark'>dashboard</Dropdown.Item>}
      {/* {user.role === 'user' &&<Dropdown.Item onClick={()=>{navigate('/orders')}} className='text-dark'>Orders</Dropdown.Item>}
         */}
        <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
      </DropdownMenu>
    </Dropdown>
    
  ) :
  <Link to="/login" className="btn pad text-white" id="login_btn">Login</Link>
  
  }
  </Fragment>
 
  <Link to="/cart" className=" pad mt-2 ps-4">< FaShoppingCart/> </Link> 
  {/* {cartItems.length} */}
  
  

          </Nav>
        </Navbar.Collapse>
      
    </Navbar>

    </Fragment>
  )
}

export default Header

