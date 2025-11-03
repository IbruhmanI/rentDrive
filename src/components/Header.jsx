import React from 'react'
import Image from '../assets/image/Main-logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <NavLink to='/'><img src={Image} /></NavLink>
                    <div>
                        <NavLink to='about-us'>О нас</NavLink>
                        <a href="">Авто в аренду</a>
                        <a href="">Аренда авто под такси</a>
                        <NavLink to='investors'>Инвесторам</NavLink>
                    </div>
                    <button>Арендовать сейчас</button>
                </div>
            </div>
        </div>
    )
}

export default Header
