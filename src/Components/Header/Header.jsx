import './Header.css'
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className='header'>
      <div className="header-img">
      <img src={assets.header_img} alt="" />
      </div>
      <div className="header-content">
        <h2>order your favourite food here </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem pariatur dolor consequuntur vero voluptate maxime culpa a molestias. Ab, totam.
        </p>
            <button>view menu</button>
      </div>
    </div>
  )
}

export default Header
