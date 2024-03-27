import './Team.scss';

import TeamCard from './TeamCard/TeamCard';
import SwitchButtons from '../SwitchButtons/SwitchButtons';

import worker1 from '../../images/worker1.png';
import worker2 from '../../images/worker2.png';
import worker3 from '../../images/worker3.png';

const workersData = [
    {
        name: "Александр Федулов",
        post: "Ремонтник",
        photo: worker1,
        numberOfWorks : 398,
        expierenceYears: 3,
        rating: 4.5,
        id: 1
    },
    {
        name: "Александр Федулов",
        post: "Ремонтник",
        photo: worker2,
        numberOfWorks : 398,
        expierenceYears: 3,
        rating: 4.5,
        id: 2
    },
    {
        name: "Александр Федулов",
        post: "Ремонтник",
        photo: worker3,
        numberOfWorks : 398,
        expierenceYears: 3,
        rating: 4.5,
        id: 3
    }
]

const cards = workersData.map(card => <TeamCard photo={card.photo} name={card.name} post={card.post} numberOfWorks={card.numberOfWorks} expierenceYears={card.expierenceYears} rating={card.rating} key={card.id}/>)

export default function Team(props){
    return(
        <div className="team ">
            <div className="teamWrapper center">
                <div className="teamHeader">
                    <p>
                        В нашем штате 37 сотрудников
                    </p>
                    <h4>
                        Мы большая команда профессионалов
                    </h4>
                </div>
                <div className="teamCards">
                    {cards}
                </div>
                <SwitchButtons />
            </div>
        </div>
    )
}