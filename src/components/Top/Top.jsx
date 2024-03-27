import '../Top/Top.scss';

import close from '../../images/closeBanner.svg';
import onlineStatus from '../../images/onlineStatus.svg';
import saleArrow from '../../images/arrow.svg';

// const onlineStatus = <svg className="onlineStatus" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 50 50">
// <circle cx="15" cy="15" r="15"></circle>
// </svg>

export default function Top(props){
    return(
        <>
            <div className="top">
                <div className="backgroundWrapper">
                    <div className="topWrapper center">
                        <div className="imagePart">
                            <div className="textPart">
                                <div className="offer">
                                    <h1>
                                        Ремонт стиральных машин на дому c годовой гарантией
                                    </h1>
                                    <p>
                                        <span>Отремонтируем на дому</span> или бесплатно завезем и доставим обратно из сервисного центра
                                    </p>
                                </div>
                                <div className="orderCall">
                                    <a href="#">
                                        Заказать звонок
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="saleBanner center">
                <div className="saleBannerWrap">
                    <button className="close">
                        <img src={close} alt="close" />
                    </button>
                    <div className="onlineStatusWrap">
                        <img src={onlineStatus} alt="online status" className="onlineStatus" />
                        <p className="saleText">
                            <span>Мы открыты и принимаем заказы до 21:00</span>, позвоните сейчас и мы сделаем скидку 15%
                        </p>
                    </div>
                    <a href="#" className="getSale">
                        <span>Получить скидку</span>
                        <img src={saleArrow} alt="arrow" />
                    </a>
                </div>
            </div>
        </>
    )
}