import './Review.scss';

export default function Review(props){
    return(
        <div className="review">
            <div className="peopleData">
                <div className="peopleDataWrapper">
                    <img src={props.avatar} alt="avatar" />
                    <div className="peopleDataText">
                        <p className="name">
                            {props.name}
                        </p>
                        <p className="date">
                            {props.date}
                        </p>
                    </div>
                </div>
                <p className="reviewText">
                    {props.text}
                </p>
            </div>
        </div>
    )
}