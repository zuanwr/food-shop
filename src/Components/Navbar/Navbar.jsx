import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

    const [item,setMenu] = useState ("home")
    
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=> setMenu("home")} className={item === "home" ? "active":"" }>home</Link>
        <a href='#explore-menu' onClick={()=> setMenu("menu")} className={item === "menu" ? "active":""}>menu</a>
        <a href='#download' onClick={()=> setMenu("mobile-app")} className={item === "mobile-app" ? "active":""}>mobile app</a>
        <a href='#footer' onClick={()=> setMenu("contact-us")} className={item === "contact-us"? "active":"" }>contact us</a>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" /> */}
        <div className="search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className="dot"></div>
        </div>
        <div className="icon">
        <i onClick={()=>setShowLogin(true)} className='bx bxs-user-circle' ></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
