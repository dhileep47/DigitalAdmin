import { Link } from 'react-router-dom';
import logo from './assets/logo.jpg'
const Nav = () => {
    return (
        <nav className="w-full z-10 bg-white">
            <input type="checkbox" id="check" hidden/>
            <label htmlFor="check" className="float-right text-black leading-[80px] text-3xl mr-10 lg:hidden">
                <i className="fas fa-bars"></i>
            </label>
            <div className="h-20  inline-flex">
                <img src={logo} alt="logo"/>
                </div>
            <ul className="float-right mr-10 lg:flex leading-[80px] space-x-4 text-black uppercase rounded fixed lg:relative h-[100vh] lg:h-0 w-[100%] lg:w-fit top-20 lg:top-0 left-[-100%] lg:left-0 transition-all duration-300 lg:transition-none text-center bg-white">
                <li><Link to="/">Login</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/products">Products</Link></li>

            </ul>
        </nav>      
    );
}

export default Nav;
