import React, { useState } from 'react'
import minus from '../assets/image/minus-circle.svg'
import plus from '../assets/image/plus-circle.svg'
import avaPic from '../assets/image/Avatar group.png'

const Faq = () => {
    const details = [
        { id: 1, title: "Покрывает ли страховка все траты на автомобиль?", text: "Страховка полностью покрывает траты на автомобиль в случае ДТП" },
        { id: 2, title: "С какого возраста можно арендовать автомобиль?", text: "Автомобили можно арендовать для лиц старше 23 лет." },
        { id: 3, title: "Какой требуется залог при аренде автомобиля?", text: "Размер залога при аренде автомобиля зависит от модели машины." },
        { id: 4, title: "Какой минимальный срок аренды?", text: "Минимальный срок аренды автомобилей составляет два дня." }
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

export default Faq
