import './Service.scss';

export default function Service(props){
    return(
        <div className="service">
            <p className="name">{props.name}</p>
            <p className="sparePartCost">{props.sparePartCost}</p>
            <p className={`workCost ${props.freeClass}`}>{props.workCost}</p>
        </div>
    )
}