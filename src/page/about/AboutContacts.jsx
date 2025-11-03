import React from 'react'
import mailIcon from '../../assets/image/mailRed.svg'
import phoneIcon from '../../assets/image/phoneRed.svg'
import pinIcon from '../../assets/image/map-pinRed.svg'

const AboutContacts = () => {
    return (
        <div id="contacts">
            <div className="container">
                <div className="contacts">
                    <p>Свяжитесь с нами</p>
                    <h2>Контакты</h2>
                    <div className='aboutContact'>
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
                    </div>
                    <p>Местоположение</p>
                    <h2>Где мы находимся?</h2>
                    <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4917.348503504057!2d74.59685673158764!3d42.875526463243645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7df27270e87%3A0xa61565ff94379a36!2sNAVAT!5e0!3m2!1sen!2skg!4v1761902630858!5m2!1sen!2skg" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div>
                        <div>
                            <img src={pinIcon} />
                            <h3>Офис</h3>
                            <p>Пн-Сб 9:00 до 17:00.</p>
                            <p>Таджикистан, г. Худжанд ул Камоли Хучанди 2/8, Офис 15</p>
                        </div>
                        <div>
                            <img src={pinIcon} />
                            <h3>Автопарк</h3>
                            <p>Пн-Сб 9:00 до 17:00.</p>
                            <p>Таджикистан, г. Худжанд 16 мкр ЧСК Сорбон</p>
                        </div>
                    </div>
                    <p>Мы будем рады вас услышать. Пожалуйста заполните поле для заявки и мы свяжемся с вами</p>
                    <h2>Оставьте заявку</h2>
                    <div className="contacts-form">
                        <form action="">
                            <div>
                                <div>
                                    <label>Выше имя</label>
                                    <input type="text" placeholder='Имя' required />
                                </div>
                                <div>
                                    <label>Фамилия</label>
                                    <input type="tel" placeholder='Фамилия' />
                                </div>
                            </div>
                            <div>
                                <label>Номер телефона</label>
                                <input type="text" placeholder='+992' required />
                            </div>
                            <div>
                                <label>Ваш комментарий</label>
                                <textarea placeholder="Комментарий"></textarea>
                            </div>
                            <div>
                                <input type="checkbox" id="agree" className='contacts-checkBox' required />
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

export default AboutContacts
