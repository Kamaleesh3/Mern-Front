import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shipped from './Images/Images/shipped.png'
import boy from './Images/Images/boy.png'
import free from './Images/Images/free.png'
import best from './Images/Images/best-seller.png'
import Header from '../layouts/Header';
import {Link } from 'react-router-dom'

function About() {
  return (
    <div className='container-fluid'>
      <Header/>
    <div className='blog'>
      <h1>About us</h1>
      </div>
      <div >
        <h2>Why Shop With us</h2>
        
        <div className='clogs'>
        <Row className='justify-content-center'>
          <Col md={3} className='cols '>
            <img className='li' src={shipped} width={55}  alt=''/>
         <br/>
         <h3 className='pt-3'>Fast Delivery</h3>
         <p>variations of passages of Lorem Ipsum available</p>
          </Col>
          <Col md={3} className='cols  '>
          <img className='li' src={free} width={55}  alt=''/>
          <h3 className='pt-3'>Free Shipping</h3>
          <p>variations of passages of Lorem Ipsum available</p>


          </Col>
          <Col md={3} className='cols  '>
          <img className='li' src={best} width={55}  alt=''/>
          <h3 className='pt-3'>Best Quality</h3>
          <p>variations of passages of Lorem Ipsum available</p>


          </Col>
        </Row>
        </div>



      </div>

       {/* 3rd page */}

       <div className='  mento ' >
        <Container>
          <Row>
          <Col>
       <div className='back '>
        <img src={boy} alt='' width={420} />
        
       </div>
       </Col>

       <Col>
       <div className='tips'>
        <h1>#New Arrivals</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi sit laboriosam error illum odio aspernatur asperiores ullam rerum veritatis? Sed perferendis amet, quo molestiae laboriosam accusantium. Sed, animi eos ea qui est beatae aut pariatur. Ullam quisquam, facere facilis, laborum soluta provident, corrupti culpa eligendi minima magnam ex dolorum.</p>
        <button><Link to="/products" className='mentos'>Shop Now</Link></button>
       </div>

       </Col>
       </Row>
     
       </Container>

       
       </div>
       
       
    </div>
  )
}

export default About
