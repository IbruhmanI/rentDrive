import React, { useState } from 'react'
import minus from '../../assets/image/minus-circle.svg'
import plus from '../../assets/image/plus-circle.svg'
import avaPic from '../../assets/image/Avatar group.png'

const InvestorsFaq = () => {
    const details = [
        { id: 1, title: "Заключаете ли вы договор и какой именно?", text: "Да, заключаем. Шаблон договора можно получить оставив заявку выше по форме." },
        { id: 2, title: "Что происходит с инвестициями, если инвестор забирает их раньше срока указанного в договоре?", text: "Проценты сгорают, сумма инвестиций возвращается. (Если сумма инвестиций меньше (100.000 сомон) то забрать инвестиции можно в любой период времени, предупредив за 30 дней)." },
        { id: 3, title: "Как часто выплачивается прибыль?", text: "Прибыль выплачивается ежемесячно, в начале каждого месяца (1го числа)." }
    ]
    const [openId, setOpenId] = useState(null);
    const Toggle = (id) => {
        setOpenId(openId === id ? null : id);
    }
    return (
        <div id="faq">
            <div className="container">
                <div className="faq">
                    <p>Все что нужно знать о наших услугах</p>
                    <h2>Часто задаваемые вопросы</h2>
                    {details.map(item => (
                        <div className="faq-answers" key={item.id}>
                            <div className="faq-details" onClick={() => Toggle(item.id)}>
                                <div>
                                    <h3>{item.title}</h3>
                                    {openId === item.id ? <img src={minus} /> : <img src={plus} />}
                                </div>
                                {openId === item.id && <p>{item.text}</p>}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="faq-window">
                    <img src={avaPic}/>
                    <h3>Еще остались вопросы?</h3>
                    <p>Не нашли ответа на свой вопрос? Пожалуйста свяжитесь с нами.</p>
                    <button>Связаться</button>
                </div>
            </div>
        </div>
    )
}

export default InvestorsFaq
