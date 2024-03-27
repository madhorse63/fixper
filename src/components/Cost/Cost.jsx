import './Cost.scss';

import Service from './Service/Service';

import showAll from '../../images/showAll.svg';

const serviceData = [
    {
        name: "Выезд мастера",
        sparePartCost: 0,
        workCost: 0,
        key: 1
    },
    {
        name: "Диагностика стиральной машины",
        sparePartCost: 0,
        workCost: 0,
        key: 2
    },
    {
        name: "Замена блока питания",
        sparePartCost: 750,
        workCost: 900,
        key: 3
    },
    {
        name: "Замена помпы",
        sparePartCost: 8880,
        workCost: 1900,
        key: 4
    },
    {
        name: "Замена подшипников",
        sparePartCost: 1450,
        workCost: 750,
        key: 5
    },

]

const serviceElements = serviceData.map(service => <Service name={service.name} sparePartCost={service.sparePartCost===0? "" : `от ${service.sparePartCost} ₽`} workCost={service.workCost===0? "Бесплатно" : `${service.workCost} ₽`} freeClass={service.workCost ===0? "free" : ""} key={service.key}/>)

export default function Cost(props){
    return(
        <div className="cost center">
            <h3>
                Стоимость работ
            </h3>
            <div className="services">
                <Service name="Услуга" sparePartCost="Стоимость запчасти" workCost="Стоимость работ" />
                {serviceElements}
            </div>
            <div className="showAll">
                <p>
                    Показать все цены
                </p>
                <img src={showAll} alt="show all" />
            </div>
        </div>
    )
}