import '../style/Footer.css';
import avatar from '../assets/images/image-avatar.png';

function Footer() {
    const avatarStyle = {
		height: 33,
		width: 33,
	}

    const avatarBorderStyle = {
        height: 33,
		width: 33,
        borderRadius: '100%',
        border: '1px solid white',
        marginRight: '20px',
    }

    return (
        <div className="footer-container">
            <div style={avatarBorderStyle}>
                <img src={avatar} alt="user avatar" style={avatarStyle}/>
            </div>
            <p>Creation of Alize Nguyen</p>
        </div>
    );
}
  
export default Footer;