import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { MdDashboard } from "react-icons/md";

export default function Sidebar () {

    const navigate = useNavigate();

    return (
        <div className="sidebar-wrapper ">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                <li>
                    <Link to="/admin/dashboard"><MdDashboard /> Dashboard</Link>
                </li>
                
                <li>
                    <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                </li>
        
                 <li>
                    <NavDropdown title={
                        <i className='fa fa-product-hunt'> catelog</i>
                    }>
                        {/* <NavDropdown.Item  onClick={() => navigate('/admin/categerious')} > <i className='fa fa-shopping-basket'> category</i></NavDropdown.Item> */}
                        <NavDropdown.Item  onClick={() => navigate('/admin/products')} > <i className='fa fa-plus'> products </i></NavDropdown.Item>
                        {/* <NavDropdown.Item  onClick={() => navigate('/admin/category')} > <i className='fa fa-shopping-basket'> categeroies</i></NavDropdown.Item> */}
                    </NavDropdown>
                </li> 

                <li>
                    <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Orders</Link>
                </li>

                

                <li>
                    <Link to="/admin/reviews"><i className="fa fa-users"></i> Reviews</Link>
                </li>
        
            </ul>
            </nav>
        </div>
    )
}