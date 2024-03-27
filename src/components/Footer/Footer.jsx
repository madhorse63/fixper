import './Footer.scss';

import logo from '../../images/logo.svg';
import mir from '../../images/mir.svg';
import mastercard from '../../images/mastercard.svg';
import visa from '../../images/visa.svg';
import applePay from '../../images/applePay.svg';
import googlePay from '../../images/googlePay.svg';


import Navigation from '../Navigation/Navigation';

export default function Footer(props){
    return(
        <div className="footer">
            <div className="footerLogo">
                <img src={logo} alt="logo" />
                <p>Fixper</p>
            </div>
            <div className="footerNav">
                <Navigation />
                <a href="#">Карта сайта</a>
            </div>
            <div className="paymentMethods">
                <p>
                    Способы оплаты:
                </p>
                <div className="paymentMethodsOption">
                    <div className="option">
                        <img src={mir} alt="mir" />
                    </div>
                    <div className="option">
                        <img src={mastercard} alt="mastercard" />
                    </div>
                    <div className="option">
                        <img src={visa} alt="visa" />
                    </div>
                    <div className="option">
                        <img src={applePay} alt="apple pay" />
                    </div>
                    <div className="option">
                        <img src={googlePay} alt="google pay" />
                    </div>
                    <div className="option">
                        <p>Наличные</p>
                    </div>
                </div>
            </div>
        </div>
    )
}