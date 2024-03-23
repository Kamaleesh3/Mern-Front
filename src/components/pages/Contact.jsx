import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import boy from '../pages/Images/Images/boy.png'
import Header from '../layouts/Header';


function Contact() {
 
    const [formData, setFormData] = useState({
      email: '',
    });
 
   const [errors, setErrors] = useState({});
 
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({
       ...formData,
       [name]: value,
     });
     
     setErrors({
       ...errors,
       [name]: '',
     });
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
     const validationErrors = validateForm(formData);
     if (Object.keys(validationErrors).length === 0) {
 
       console.log('Form submitted successfully!', formData);
     } else {
 
       setErrors(validationErrors);
     }
   };
 
   const validateForm = (data) => {
     let errors = {};
 
     if (!data.username.trim()) {
       errors.username = 'Username is required';
     }
 
     if (!data.email.trim()) {
       errors.email = 'Email is required';
     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
       errors.email = 'Invalid email address';
     }

     
      else{
        alert("Form is validate");
      }
     
 
    //  if (!data.password.trim()) {
    //    errors.password = 'Password is required';
    //  } else if (data.password.length < 6) {
    //    errors.password = 'Password must be at least 6 characters long';
    //  }
 
    //  if (data.password !== data.confirmPassword) {
    //    errors.confirmPassword = 'Passwords do not match';
    //  }

  
     return errors;
     
   };
 
  return (
    <div className='container-fluid'>
        <Header/>
      <div className='blog'>
        <h1>Contact Us</h1>
      </div>
      <div className='container  bite'>


      <form onSubmit={handleSubmit}>
      <div className='container'>
       
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder='Enter Your Name'

        />
        <p>
        {errors.username && <span className="error">{errors.username}</span>}
        </p>


        
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter Your Email'
        />
        <p>
        {errors.email && <span className="error">{errors.email}</span>}
        </p>


        {/* <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}

        />
        {errors.password && <span className="error">{errors.password}</span>}
      


        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span> )} */}
<input
className='mb-3'
name='subject'
type='text'
placeholder='Enter Subject'/>


<textarea
    
      name='message'
        type='text'
        placeholder='Enter Your Message' /> <br/>

<button type="submit" className='mt-3'>Submit</button>
      </div>
   
    </form>






      </div>
      

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
        <button>Shop Now</button>
       </div>

       </Col>
       </Row>
     
       </Container>

       
       </div>
       

    </div>
  )
}

export default Contact
