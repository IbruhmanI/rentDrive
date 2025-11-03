import React from 'react'
import img1 from '../../assets/image/image 13.png'
import img2 from '../../assets/image/image 20.png'
import icon1 from '../../assets/image/mail.svg'
import icon2 from '../../assets/image/dollar-sign.svg'
import icon3 from '../../assets/image/file-plus.svg'

const InvestorsTitle = () => {
    const advantages = [
        { id: 1, title: "Прозрачность", text: 'Простые и понятные условия для вложений - не требуется специальных знаний' },
        { id: 2, title: "Предсказуемость", text: 'Вы сразу можете оценить свою доходность, которая зависит от суммы и сроков инвестиций' },
        { id: 3, title: "Честность", text: 'Мы откровенно делимся всеми аспектами нашего бизнеса' }
    ];
    const grid = [
        { id: 1, img: icon1, title: "Таксопарк ", text: "Увеличиваем наш автопарк - покупаем, готовим и запускаем современные такси на улицы нашего города." },
        { id: 2, img: icon2, title: "Автосервис ", text: "Расширяем сеть автосервисов для обеспечения должного технического состояния автомобилей такси, чтобы повысить безопасность и надежность перевозок." },
        { id: 3, img: icon3, title: "Автомойки ", text: "Cоздание комфортных условий для водителей такси через обеспечение качественных автомоек, что способствует сохранению внешнего вида автомобилей и повышению уровня сервиса." }
    ];
    return (
        <div id="mainCar3">
            <div className="container">
                <div className="mainCar3">
                    <h2>Инвестируйте в RentDrive</h2>
                    <div className='mainCar3-img'>
                        <img src={img1} />
                        <img src={img2} />
                    </div>
                    {advantages.map(item => (
                        <div className='mainCar3-window' key={item.id}>
                            <h1>{item.title}</h1>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <h2>На что пойдут ваши инвестиций</h2>
                <div className='investors-mainCar3-grid'>
                    {grid.map(item => (
                        <div key={item.id}>
                            <img src={item.img} />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InvestorsTitle
