import './TeamCard.scss';

import checkMark from '../../../images/checkMark.svg';

export default function TeamCard(props){
    return(
        <div className="teamCard">
            <div className="photo">
                <img src={props.photo} alt="photo" />
            </div>
            <div className="about">
                <div className="aboutWrapper">
                    <p className="name">
                        {props.name}
                    </p>
                    <p className="post">
                        {props.post}
                    </p>
                    <div className="details">
                        <div className="numberOfWorks">
                            <img src={checkMark} alt="check mark" />
                            <p>
                                {props.numberOfWorks} ремонтных работ
                            </p>
                        </div>
                        <div className="expierence">
                            <img src={checkMark} alt="check mark" />
                            <p>
                                {props.expierenceYears} года в Fixper
                            </p>
                        </div>
                        <div className="rating">
                            <img src={checkMark} alt="check mark" />
                            <p>
                                Рейтинг Fixper {props.rating} 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}