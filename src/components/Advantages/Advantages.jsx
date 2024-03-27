import '../Advantages/Advantages.scss';

import Advantage from '../Advantages/Advantage/Advantage';

import adv1 from '../../images/adv1.svg';
import adv2 from '../../images/adv2.svg';
import adv3 from '../../images/adv3.svg';
import adv4 from '../../images/adv4.svg';

const advantagesData = [
    {
        image: adv1,
        text: "Фирменные запчасти у мастеров в наличии",
        key: 1
    },
    {
        image: adv2,
        text: "Большинство ремонтов делаем за час на дому",
        key: 2
    },
    {
        image: adv3,
        text: "Профессиональный инструмент под любую задачу",
        key: 3
    },
    {
        image: adv4,
        text: "Квалифицированные и опытные мастера",
        key: 4
    },
]

const advantagesElements = advantagesData.map(advantage => <Advantage image={advantage.image} text={advantage.text} key={advantage.key} />)

export default function Advantages(props){
    return(
        <div className="advanteges center">
            {advantagesElements}
        </div>
    )
}