import React from 'react'
import logo from '../assets/image/Main-logo.png'
import iconInst from '../assets/image/Instagram.png'
import iconWats from '../assets/image/Whatsapp.png'
import iconTg from '../assets/image/Telegram.png'

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div>
                        <img src={logo} />
                        <div>
                            <p className='footer-title'>О компаний</p>
                            <a href="">Политика конфиденциальности</a>
                            <a href="">Пользовательское соглашение</a>
                        </div>
                        <div>
                            <p className='footer-title'>Контакты</p>
                            <p>+992 00000000</p>
                            <p>rentdrive.tj@gmail.ru</p>
                            <p>Таджикистан, г. Душанбе ул.... 17/1, Офис 15</p>
                        </div>
                    </div>
                    <div>
                        <img src={iconInst} />
                        <img src={iconWats} />
                        <img src={iconTg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
