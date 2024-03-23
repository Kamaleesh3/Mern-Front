import React from 'react'
// import Search from './Search'
import {useEffect} from 'react';
import { Fragment } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Image} from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import logo from "../pages/Images/Images/logo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { toast } from 'react-toastify';
import { logout } from '../../actions/userActions';
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

function AdminHeader() {

const {isAuthenticated, user} = useSelector(state => state.authState);
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
      <Navbar >
      
      <Navbar.Brand className=" text-dark pe-2" href="#home">
      <img src={logo} alt="" className="pt-2 pb-2" width={250} /></Navbar.Brand>
      <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
        <Nav >
      
    
      
          
        <Fragment>
        {isAuthenticated ? (
          <Dropdown className='dropdown pad d-inline'>
            <Dropdown.Toggle variant='default text-dark pr-5' id='dropdown-basic'>
              <figure className='avatar avatar-nav'>
                <Image width="50px" src={user.avatar??'./images/products/default.png'} />
              </figure>
              <span className='text-dark'>{user.name}</span>
            </Dropdown.Toggle>
            <DropdownMenu>
              <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
            </DropdownMenu>
          </Dropdown>
          
        ) :
        <Link to="/" className="btn" id="login_btn">Login</Link>
        
        }
        </Fragment>
        
        
        
        
      
      </Nav>
      </Navbar.Collapse>
    </Navbar>

    </Fragment>
  )
}

export default AdminHeader
