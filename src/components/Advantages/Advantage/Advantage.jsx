import '../Advantage/Advantage.scss';

export default function Advantage(props){
    return(
        <div className="advantage">
            <img src={props.image} alt="image" />
            <p>{props.text}</p>
        </div>
    )
}