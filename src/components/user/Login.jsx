import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layouts/MetaData'
import { login,clearAuthError } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from "react-toastify";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Login() {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

   const {loading, error, isAuthenticated} = useSelector(state => state.authState);
   const redirect = location.search?'/home'+location.search.split('=')[1]:'/home';

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    useEffect(()=>{
        if(isAuthenticated){
          toast('Login successfully',{
            type: 'success',
        })
            navigate(redirect)
        }
        if(error){
          toast(error,{
            type: 'error',
            onOpen: ()=> { dispatch(clearAuthError) }
        })
        return
        }
    },[error, isAuthenticated, dispatch, navigate])
  return (
    <Fragment>
        <MetaData title={`Login`}/>
       <div className="row wrapper"> 
		<div className="col-10 col-lg-5">
        <form onSubmit={submitHandler} className="shadow-lg">
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <Link to="/password/forgot" className="float-right mb-4">Forgot Password?</Link>
  
            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              // disabled={loading}
            >
              LOGIN
            </button>
		
            <Link to='/register' className="float-right mt-3">New User?</Link>
		<Link to='/admin' className=" mt-3 tip">Admin</Link>
          </form>
		  </div>
    </div>
    </Fragment>
  )
}

export default Login
