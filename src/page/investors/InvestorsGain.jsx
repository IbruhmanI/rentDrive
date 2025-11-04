import React from 'react'
import icon from '../../assets/image/Icon.svg'

const InvestorsGain = () => {
    const gainLvl = [
        { id: 1, img: icon, lvlText: "Light", interest: 24, minDate: 6, minPrice: 1600 },
        { id: 2, img: icon, lvlText: "Middle", interest: 26, minDate: 12, minPrice: 2166 },
        { id: 3, img: icon, lvlText: "High", interest: 28, minDate: 18, minPrice: 3500 }
    ]
    return (
        <div id="investorsGain">
            <div className="container">
                <div className="investorsGain">
                    <h2>Программы инвестирования</h2>
                    <div>
                        {gainLvl.map(item => (
                            <div key={item.id}>
                                <h3>Программа {item.lvlText}</h3>
                                <div>
                                    <p>Процентная ставка годовых</p>
                                    <h2>{item.interest}%</h2>
                                </div>
                                <div>
                                    <p>Минимальный срок</p>
                                    <h2>{item.minDate} месяцев</h2>
                                </div>
                                <div>
                                    <p>Минимальный заработок в месяц</p>
                                    <h2><span>от </span>{item.minPrice} c</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorsGain
