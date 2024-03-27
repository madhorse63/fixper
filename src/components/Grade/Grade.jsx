import './Grade.scss';

import Review from './Review/Review';
import SwitchButtons from '../SwitchButtons/SwitchButtons';
import ExternalReviews from './ExternalReviews/ExternalReviews';

import avatar1 from '../../images/avatar1.jpg';
import avatar2 from '../../images/avatar2.jpg';

import googleLogo from '../../images/googleLogo.png';
import yandexLogo from '../../images/yandexLogo.png';
import fixcellentLogo from '../../images/fixcellentLogo.png';

const reviewsData = [
    {
        name: "Владимир Завертайлов",
        date: "15 марта 2021",
        avatar: avatar1,
        text: "Хочу выразить свою и признательность в решении ремонта стиральной машины Самсунг A600FN, смогли сделать раньше срока и качественно, спасибо большое. Вы лучшие! Всегда буду обращаться к Вам, ваш клиент.",
        id: 1
    },
    {
        name: "Варя Турчинская",
        date: "25 мая 2023",
        avatar: avatar2,
        text: "Машинка стала вести себя странно, цикл стирки стал дольше, чем должно быть по программе. Плюс на дисплее появлялся код ошибки. Через диспетчера вызвала мастера. Валентин приехал быстро, минут через 40. Разобрался с поломкой, починил, выписал гарантию. Всё супер! Могу рекомендовать сервис.",
        id: 2
    }
]

const externalReviewsData = [
    {
        rating: 4.5,
        maxRating: "5,0",
        amountOfReviews: 100,
        logo: googleLogo,
        id: 1
    },
    {
        rating: 4.8,
        maxRating: "5,0",
        amountOfReviews: 250,
        logo: yandexLogo,
        id: 2
    },
    {
        rating: 4.3,
        maxRating: "5,0",
        amountOfReviews: 10000,
        logo: fixcellentLogo,
        id: 3
    },
]

const reviewsElements = reviewsData.map(review => <Review name={review.name} date={review.date} avatar={review.avatar} text={review.text} key={review.id}/>)

const externalReviewsElements = externalReviewsData.map(externalReview => <ExternalReviews logo={externalReview.logo} rating={externalReview.rating} maxRating={externalReview.maxRating} amountOfReviews={externalReview.amountOfReviews} key={externalReview.id}/>)

export default function Grade(props){
    return(
        <div className="grade">
            <div className="gradeWrap center">
                <h4>
                    Нас высоко оценивают
                </h4>
                <div className="reviews">
                    {reviewsElements}
                </div>
                <SwitchButtons />
            </div>
            <div className="externalReviews">
                <div className="externalReviewsWrapper center">
                    {externalReviewsElements}
                </div>
            </div>
        </div>
    )
}