import './SwitchButtons.scss';

import pinkArrow from '../../images/pinkArrow.svg';
import pinkDot from '../../images/pinkDot.svg';

export default function SwitchButtons(props){
    return(
        <div className="switch">
            <div className="pages">
                <img className="activePage" src={pinkDot} alt="dot" />
                <img src={pinkDot} alt="dot" />
                <img src={pinkDot} alt="dot" />
                <img src={pinkDot} alt="dot" />
            </div>
            <div className="prevNextButtons">
                <div className="previous disabled">
                    <img src={pinkArrow} alt="arrow" />
                    <p>    
                        Назад
                    </p>
                </div>
                <div className="next active">
                    <p>
                        Далее
                    </p>
                    <img src={pinkArrow} alt="arrow" />
                </div>
            </div>
        </div>
    )
}