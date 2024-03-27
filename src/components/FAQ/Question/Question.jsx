import './Question.scss';

import more from '../../../images/more.svg';

export default function Question(props){
    return(
        <div className="question">
            <p>{props.question}</p>
            <div className="moreButton">
                <img src={more} alt="more" />
            </div>
        </div>
    )
}