import { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createNewProduct } from "../../actions/productActions";
import { clearError, clearProductCreated } from "../../slices/productSlice";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";

export  default function Categerious () {
    const [category, setCategory] = useState("");
    
    const { loading, isProductCreated, error } = useSelector( state => state.productState)

    const categories = [
        'Electronics',
        'Mobile Phones',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        'Books',
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
        'Home'
    ];

    const navigate = useNavigate();
    const dispatch = useDispatch();

   

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('category' , category);
        dispatch(createNewProduct(formData))
    }

    useEffect(() => {
        if(isProductCreated) {
            toast('Product Created Succesfully!',{
                type: 'success',
                onOpen: () => dispatch(clearProductCreated())
            })
            navigate('/admin/products')
            return;
        }

        if(error)  {
            toast(error, {
                type: 'error',
                onOpen: ()=> { dispatch(clearError()) }
            })
            return
        }
    }, [isProductCreated, error, dispatch])


    return (
       
        <div className="row">
            <div className="col-12 col-md-2">
                    <Sidebar/>
            </div>
            <div className="">
                <Fragment>
                <Container>
                    <div className="wrapper my-5"> 
                        <form onSubmit={submitHandler} className="shadow-lg" encType='multipart/form-data'>
                            <h1 className="mb-4">Categerious</h1>

                            <div className="form-group types">
                                <label htmlFor="category_field">Category:</label>
                                <select onChange={e => setCategory(e.target.value)} className="form-control" id="category_field">
                                    <option value="">Select</option>
                                    {categories.map( category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>

                
                            {/* <button
                            id="login_button"
                            type="submit"
                            disabled={loading}
                            className="btn btn-block py-3"
                            >
                            CREATE
                            </button> */}

                        </form>
                    </div>
                    </Container>
                </Fragment>
            </div>
        </div>
        
        
    )
}