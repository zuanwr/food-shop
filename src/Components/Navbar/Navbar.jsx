import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [item,setMenu] = useState ("home")
    
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=> setMenu("home")} className={item === "home" ? "active":"" }>home</Link>
        <a href='#explore-menu' onClick={()=> setMenu("menu")} className={item === "menu" ? "active":""}>menu</a>
        <a href='#download' onClick={()=> setMenu("mobile-app")} className={item === "mobile-app" ? "active":""}>mobile app</a>
        <a href='#footer' onClick={()=> setMenu("contact-us")} className={item === "contact-us"? "active":"" }>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
