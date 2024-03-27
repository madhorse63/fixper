import '../Diagnostics/Diagnostics.scss';

import Problem from './Problem/Problem';

import triangle from '../../images/triangle.svg';

const problemsData = [
    {
        question: "Не включается",
        answer: "",
        key: 1
    },
    {
        question: "Не выключается",
        answer: "",
        key: 2
    },
    {
        question: "Не нагревает воду",
        answer: "",
        key: 3
    },
    {
        question: "Все работет, но мне скучно и я хочу пообщаться с мастером",
        answer: "",
        key: 4
    },
    {
        question: "Не крутится барабан",
        answer: "",
        key: 5
    },
    {
        question: "Не работает кнопка включения",
        answer: "",
        key: 6
    },
    {
        question: "Не работает кнопка включения",
        answer: "",
        key: 7
    },
    {
        question: "Иная проблема",
        answer: "",
        key: 8
    },
    {
        question: "Не крутится барабан",
        answer: "",
        key: 9
    },
    {
        question: "Не крутится барабан",
        answer: "",
        key: 10
    },
    {
        question: "Не работает кнопка включения",
        answer: "",
        key: 11
    }
]

const problemsElements = problemsData.map(problems => <Problem question={problems.question} key={problems.key}/>)

export default function Diagnostics(props){
    return(
        <div className="diagnostics">
            <div className="diagnosticsWrapperWash">
                <div className="wrapperGraphics center">
                    <div className="problemsHeader">
                        <h2>
                            Онлайн-диагностика
                        </h2>
                        <p>
                            Какая у вас проблема?
                        </p>
                    </div>
                    <div className="problemsBody">
                        {problemsElements}
                    </div>
                    <div className="instructions">
                        <img src={triangle} alt="triangle" />
                        <p>
                            Выберите проблему и узнайте её решение
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}