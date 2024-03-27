import './Problem.scss';

export default function Problem(props){
    return(
        <div className="problem">
            <p>
                {props.question}
            </p>
        </div>
    )
}