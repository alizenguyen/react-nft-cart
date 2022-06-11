import '../style/Footer.css';
import avatar from '../assets/images/image-avatar.png';

function Footer() {
    return (
        <div className="footer-container">
            <img src={avatar} alt="user avatar" style={{height: 33, width: 33, marginRight: '5px'}}/>
            <p>Creation of Alize Nguyen</p>
        </div>
    );
}
  
export default Footer;