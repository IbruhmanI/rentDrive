import React from 'react'
import img1 from '../assets/image/image 13.png'
import img2 from '../assets/image/image 20.png'
import icon1 from '../assets/image/mail.svg'
import icon2 from '../assets/image/dollar-sign.svg'
import icon3 from '../assets/image/file-plus.svg'
import icon4 from '../assets/image/file-text.svg'
import icon5 from '../assets/image/check-circle.svg'
import icon6 from '../assets/image/map-pin.svg'


const MainCar3 = () => {
    const advantages = [
        { id: 1, title: "Большой выбор автомобилей", text: 'У нас вы найдете автомобили для любого вида поездки' },
        { id: 2, title: "Выгодные цены", text: 'Мы предоставляем выгодные условия по прокату автомобилей' },
        { id: 3, title: "Высокое качество обслуживания", text: 'Мы поможем подобрать вам самый комфортный автомобиль' },
        { id: 4, title: "Путешествие", text: 'У нас вы найдете автомобили для любого вида поездки' }
    ];
    const gridDetails = [
        { id: 1, img: icon1, title: "Свяжитесь с нами", text: "Можете установить связь по телефону, WhatsApp, Instagram, или Email для начала процесса аренды" },
        { id: 2, img: icon3, title: "Оформление договора", text: "Заключаем арендный контракт, устанавливаем четкие правила использования автомобиля" },
        { id: 3, img: icon6, title: "Визуальный осмотр", text: "Отправляем фото автомобиля через WhatsApp для визуальной оценки и выбора лучшего варианта" },
        { id: 4, img: icon2, title: "Залог и оплата", text: "Вносите залог и оплачиваете аренду машины, завершая процесс и готовясь к приятному вождению" },
        { id: 5, img: icon4, title: "Проверка документов", text: "Предоставляете нам копии паспорта и водительских прав для обеспечения законности и безопасности аренды" },
        { id: 6, img: icon5, title: "Приятного пути!", text: "Всё готово – наслаждайтесь вашей поездкой на выбранной машине!" },
    ];
    return (
        <div id="mainCar3">
            <div className="container">
                <div className="mainCar3">
                    <h2>Наши преимущеста</h2>
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
                <h2>Как арендовать авто</h2>
                <div className='mainCar3-grid'>
                    {gridDetails.map(item => (
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

export default MainCar3
