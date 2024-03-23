import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './layouts/MetaData'
import { getProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './layouts/Loader';
import Product from './product/Product';
import {toast} from "react-toastify";
import Pagination from "react-js-pagination"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shipped from './pages/Images/Images/shipped.png'
import Carousel from 'react-bootstrap/Carousel'
import boy from './pages/Images/Images/boy.png'
import free from './pages/Images/Images/free.png'
import best from './pages/Images/Images/best-seller.png'
import girl from "./pages/Images/Images/client.jpg";
import logo from "./pages/Images/Images/logo.png";
import {Link } from 'react-router-dom'
import Header from './layouts/Header';


export default function Home() {
    const dispatch = useDispatch();
    const {products, loading, error, productsCount, resPerPage} =    useSelector((state) => state.prductsState)
    const [currentPage, setCurrentPage] = useState(1);

const setCurrentPageNo =(pageNo) =>{
  setCurrentPage(pageNo)
}


useEffect(()=>{
  if(error){
    return  toast.error( error )
  }
 
 dispatch(getProducts(null, null, null, null, currentPage))
}, [error, dispatch, currentPage])

  return (
    <div>
    <Header />
          <div data-aos="fade-up" data-aos-duration="2000" className='bg'>
      <Carousel className='container'>
      <Carousel.Item interval={1000}>
        <div className='hipes'>
          <h1 className='hipe'>Sale 20% Off</h1>
          <h1 className='hope'>On Everything</h1>
          <p className='hopes'>  Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
          <button>Shop Now</button>
        </div>
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div className='hipes'>
          <h1 className='hipe'>Sale 20% Off</h1>
          <h1 className='hope'>On Everything</h1>
          <p className='hopes'>  Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
          <button>Shop Now</button>
        </div>
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div className='hipes'>
          <h1 className='hipe'>Sale 20% Off</h1>
          <h1 className='hope'>On Everything</h1>
          <p className='hopes'>  Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
          <button>Shop Now</button>
        </div>
        
      </Carousel.Item>
    </Carousel>

      </div>

      
      {/* second page */}


<div>

<div  >
  <h2>Why Shop With us</h2>

  <div className='clogs'>
  <Row className='justify-content-center'>
    <Col  md={3} className='cols '>
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



   {/* 3rd page */}

   <div   className='  mento ' >
        <Container>
          <Row>
          <Col>
       <div  className='back '>
        <img src={boy} alt='' width={420} />
        
       </div>
       </Col>

       <Col >
       <div className='tips'>
        <h1>#New Arrivals</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi sit laboriosam error illum odio aspernatur asperiores ullam rerum veritatis? Sed perferendis amet, quo molestiae laboriosam accusantium. Sed, animi eos ea qui est beatae aut pariatur. Ullam quisquam, facere facilis, laborum soluta provident, corrupti culpa eligendi minima magnam ex dolorum.</p>
        <button><Link to="/product" className='mentos'>Shop Now</Link></button>
       </div>

       </Col>
       </Row>
       </Container>
       </div>



</div>

</div>





{loading ? <Loader/>:
        <Fragment >
          
      
            <MetaData title={'Buy Best Products'} />
            <h1 id="products_heading">Latest Products</h1>
            <section id="products" className="container mt-5">
                <div className="row">
                    { products && products.map(product => (
                        <Product col={3} key={product._id}  product={product}/>
                    ))}
                
                </div>
            </section>
            {productsCount > 0 && productsCount > resPerPage?
            <div className="d-flex justify-content-center mt-5">
                   <Pagination 
                        activePage={currentPage}
                        onChange={setCurrentPageNo}
                        totalItemsCount={productsCount}
                        itemsCountPerPage={resPerPage}
                        nextPageText={'Next'}
                        firstPageText={'First'}
                        lastPageText={'Last'}
                        itemClass={'page-item'}
                        linkClass={'page-link'}
                   />     
            </div> : null }
        </Fragment>
   }
   


   <div className="test mr" >
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
    
  )
}


