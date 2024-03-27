import './CallTechician.scss';

export default function CallTechician(props){
    return(
        <div className="callTechician">
            <div className="callTechicianContent">
                <div className="callTechicianDescription">
                    <h5>
                        Вызов мастера
                    </h5>
                    <p>
                        Оставьте заявку сейчас и получите <span>скидку 15%</span>
                    </p>
                </div>
                <form>
                    <input type="text" placeholder="Номер телефона" />
                    <button type="submit">Заказать звонок</button>
                </form>
            </div>
        </div>
    )
}