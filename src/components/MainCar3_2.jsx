import React from 'react'
import img from '../assets/image/image 15.png'

const MainCar3_2 = () => {
  return (
    <div id='mainCar3-2'>
      <div className="container">
        <div className="mainCar3-2">
            <h1>Арендовать авто онлайн</h1>
            <div>
                <p>Заполните все поля для бронирования, и мы свяжемся с вами для подтверждения заказа</p>
                <button>Забронировать онлайн</button>
            </div>
            <img src={img}/>
        </div>
      </div>
    </div>
  )
}

export default MainCar3_2
