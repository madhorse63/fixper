import './ExternalReviews.scss';

import star from '../../../images/star.svg';

export default function ExternalReviews(props){
    return(
        <div className="externalReview">
            <div className="reviewInfo">
                <div className="externalRating">
                    <img src={star} alt="star" />
                    <p className="externalRating">{props.rating}<span> / {props.maxRating}</span></p>
                </div>
                <div className="amountOfReviews">
                    {props.amountOfReviews} + оценок
                </div>
            </div>
            <img src={props.logo} alt="logo" />
        </div>
    )
}