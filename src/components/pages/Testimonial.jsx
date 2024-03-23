import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shipped from "../pages/Images/Images/shipped.png";
import Carousel from "react-bootstrap/Carousel";
import girl from "../pages/Images/Images/client.jpg";
import Header from "../layouts/Header";


function Testimonial() {
  return (
    <div>
      <Header/>
      <div className="blog">
        <h1>Testimonial</h1>
      </div>
      <div className="test">
        <h2>Customer's Testimonial</h2>

        <div className="container">
          <Carousel>
            <Carousel.Item interval={1000}>
              <div>
                <img src={girl} width={150} alt="" />
                <h4 className="mt-3">Anna Trevor</h4>
                <h6 className="text-secondary">Customer</h6>
                <p>
                  Dignissimos reprehenderit repellendus nobis error quibusdam?
                  Atque animi sint unde quis reprehenderit, et,
                  <br /> perspiciatis, debitis totam est deserunt eius officiis
                  ipsum ducimus ad labore modi voluptatibus accusantium <br />{" "}
                  sapiente nam! Quaerat.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <div>
                <img src={girl} width={150} alt="" />
                <h4 className="mt-3">Anna Trevor</h4>
                <h6 className="text-secondary">Customer</h6>
                <p>
                  Dignissimos reprehenderit repellendus nobis error quibusdam?
                  Atque animi sint unde quis reprehenderit, et,
                  <br /> perspiciatis, debitis totam est deserunt eius officiis
                  ipsum ducimus ad labore modi voluptatibus accusantium <br />{" "}
                  sapiente nam! Quaerat.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <div>
                <img src={girl} width={150} alt="" />
                <h4 className="mt-3">Anna Trevor</h4>
                <h6 className="text-secondary">Customer</h6>
                <p>
                  Dignissimos reprehenderit repellendus nobis error quibusdam?
                  Atque animi sint unde quis reprehenderit, et,
                  <br /> perspiciatis, debitis totam est deserunt eius officiis
                  ipsum ducimus ad labore modi voluptatibus accusantium <br />{" "}
                  sapiente nam! Quaerat.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    
    </div>
  );
}

export default Testimonial;
