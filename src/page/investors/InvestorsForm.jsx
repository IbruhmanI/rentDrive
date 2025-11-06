import React from 'react'

const InvestorsForm = () => {
    return (
        <div id="investorsForm">
            <div className="container">
                <div className="investorsForm">
                    <div>
                        <h1>Хочу стать инвестором</h1>
                        <p>Мы откровенно делимся всеми аспектами нашего бизнеса</p>
                    </div>
                    <div className="contacts-form investor-form">
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
                            <div className='contacts-checkBox-flex'>
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

export default InvestorsForm
