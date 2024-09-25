import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            architecto et iste nam sit aut, corporis facere odit ad sunt.
          </p>
          <div className="footer-social-icon">
          <i className='bx bxl-facebook'></i>
          <i className='bx bxl-twitter' ></i>
          <i className='bx bxl-instagram' ></i>
          <i className='bx bxl-whatsapp' ></i>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>home</li>
            <li>about us</li>
            <li>delivery</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+62-213-561-8815</li>
            <h4>ADELL@gmail.com</h4>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright &copy; 2024 DELL.com - ALL right Reserved
      </p>
    </div>
  );
};
export default Footer;
