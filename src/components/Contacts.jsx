import React from 'react'
import mailIcon from '../assets/image/mailRed.svg'
import phoneIcon from '../assets/image/phoneRed.svg'
import pinIcon from '../assets/image/map-pinRed.svg'

const Contacts = () => {
    return (
        <div id="contacts">
            <div className="container">
                <div className="contacts">
                    <p>Свяжитесь с нами</p>
                    <h2>Контакты</h2>
                    <div>
                        <div>
                            <img src={mailIcon} />
                            <h3>Email</h3>
                            <p>rentdrive.tj@gmail.ru</p>
                        </div>
                        <div>
                            <img src={phoneIcon} />
                            <h3>Телефон для связи</h3>
                            <p>+992 00000000</p>
                        </div>
                        <div>
                            <img src={pinIcon} />
                            <h3>Наш офис</h3>
                            <p>Таджикистан, г. Душанбе ул.... 17/1, Офис 15</p>
                        </div>
                    </div>
                    <p>Мы будем рады вас услышать. Пожалуйста заполните поле для заявки и мы свяжемся с вами</p>
                    <h2>Оставьте заявку</h2>
                    <div className="contacts-form">
                        <form action="">
                            <div>
                                <div>
                                    <label>Выше имя</label>
                                    <input type="text" placeholder='Имя' required/>
                                </div>
                                <div>
                                    <label>Фамилия</label>
                                    <input type="tel"  placeholder='Фамилия'/>
                                </div>
                            </div>
                            <div>
                                <label>Номер телефона</label>
                                <input type="text" placeholder='+992' required/>
                            </div>
                            <div>
                                <label>Ваш комментарий</label>
                                <textarea placeholder="Комментарий"></textarea>
                            </div>
                            <div>
                                <input type="checkbox" id="agree" className='contacts-checkBox' required/>
                                <label htmlFor="agree" className='contacts-checkText'>Я соглашаюсь на обработку и передачу данных</label>
                            </div>
                            <button className="submit-btn">Отправить заявку</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
