import { useState } from "react";
import '../style/Card.css';
import Footer from './Footer.js'
import equilibrium from '../assets/images/image-equilibrium.jpg';
import clock from '../assets/images/icon-clock.svg';
import iconEthereum from '../assets/images/icon-ethereum.svg';
import iconView from '../assets/images/icon-view.svg';

function Card() {
    const [hover, setHover] = useState(false);

	const nftImageStyle = {
		height: 320,
		width: 320,
		borderRadius: '8px',
	}

    const handleMouseEnter = () => setHover(true);

    const handleMouseLeave = () => setHover(false);

    return (
		<div className="card-container">
            <div className="overlay" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
                {hover && <img className="view-icon" src={iconView} alt="view icon" />}
            </div>
			<img className="nft-image" src={equilibrium} style={nftImageStyle} alt="nft" />
			<div className="card-info">
				<header className="nft-title">Equilibrium #3429</header>
				<p className="nft-description">Our Equilibrium collection promotes balance and calm.</p>
				<div className="coin-description">
					<div className="coin">
						<img src={iconEthereum} alt="ethereum icon" style={{marginRight: '5px'}} />
						<p className="coin-text">0.041 ETH</p>
					</div>
					<div className="time">
						<img src={clock} alt="time left" style={{height: 16, width: 16, marginRight: '5px'}}/>
						<p>3 days left</p>
					</div>
				</div>
			</div>
            <Footer />
		</div>
    );
}
  
export default Card;