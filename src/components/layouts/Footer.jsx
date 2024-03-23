import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5"
import { IoMailOutline } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className='foot'>
      <Row >
        <div className='col-sm-4 '>
            <h1>Reach at..</h1>
            <p><FaLocationDot/>      Loaction</p>
            <p><IoCall/>   Call +01 1234567890</p>
            <p><IoMailOutline />  demo@gmail.com</p>
        </div>
        <div className='col-sm-8'>
            <h1>Famms</h1>
            <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>

            <p className='logo'><FaFacebook /> <AiFillTwitterCircle/> <TiSocialLinkedinCircular className='me-2'/> 
            <FaSquareInstagram/> <FaPinterest/> </p>
        </div>
      </Row>
    </div>
  )
}

export default Footer
