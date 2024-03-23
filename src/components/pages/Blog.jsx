import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shipped from "../pages/Images/Images/shipped.png";
import free from "../pages/Images/Images/free.png";
import best from "../pages/Images/Images/best-seller.png";
import Header from '../layouts/Header'

function Blog() {
  return (
    <div className="container-fluid">
        <Header />
      <div className="blog">
        <h1>Blog List</h1>
        <div>
          <h2>Why Shop With us</h2>

          <div className="clogs">
            <Row className="justify-content-center">
              <Col md={3} className="cols ">
                <img className="li" src={shipped} width={55} alt="" />
                <br />
                <h3 className="pt-3">Fast Delivery</h3>
                <p>variations of passages of Lorem Ipsum available</p>
              </Col>
              <Col md={3} className="cols  ">
                <img className="li" src={free} width={55} alt="" />
                <h3 className="pt-3">Free Shipping</h3>
                <p>variations of passages of Lorem Ipsum available</p>
              </Col>
              <Col md={3} className="cols  ">
                <img className="li" src={best} width={55} alt="" />
                <h3 className="pt-3">Best Quality</h3>
                <p>variations of passages of Lorem Ipsum available</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Blog;
