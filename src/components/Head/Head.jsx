import '../Head/Head.scss';

import logo from '../../images/logo.svg';
import geo from '../../images/geo.svg';

import Navigation from '../Navigation/Navigation';

export default function Head(props){
    return(
        <div className="head">
            <div className="center headWrap">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <p>Fixper</p>
                </div>            
                <Navigation />
                <div className="location">
                    <img src={geo} alt="geolocation" />
                    <p>City</p>
                </div>
                <div className="phoneCall">
                    <a href="tel:+375445812649">Позвонить</a>
                </div>
            </div>
        </div>
    )
}