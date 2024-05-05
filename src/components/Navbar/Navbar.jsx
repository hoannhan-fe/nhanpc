
import React ,{useContext, useState} from 'react';
import './Navbar.css'
// import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import {StoreContext} from '../../Context/StoreContext';
import { assets } from '../../assets/assets';

const Navbar = ({setShowLogin}) => {

        const[menu,setMenu] =useState("home");
        const{getTotalCartAmpount} = useContext(StoreContext);

  return (
    <div className='navbar'>
       <Link to='/'> <img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a  href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a  href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
        <a  href='#footer' onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart '><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmpount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
        
      </div>
    </div>
  )
}

export default Navbar;
