import './Price.css';

function Price() {
    return(
        <>
            <section className="price" id="price">
                <div className="container">
                    <div className="title service__title">
                        <h2>ПАКЕТЫ УСЛУГ</h2>
                    </div>

                    <div className="price__row">
                        <div className="price__col">
                            <div className="price__item">
                                <div className="price__title">
                                    <p>Стандарт</p>
                                </div>
                                <div className="price__includes">
                                    <ul className="price__list">
                                        <li className="price__li-item">Проживание на вилле 6 ночей </li>
                                        <li className="price__li-item">Номер категории стандарт</li>
                                        <li className="price__li-item">Экипировка для обучения</li>
                                        <li className="price__li-item">Обучение серфингу 5 тренировок по 2 часа</li>
                                        <li className="price__li-item">Страховка</li>
                                        <li className="price__li-item">Вечеринка с угощениями и дискотекой</li>
                                    </ul>
                                </div>
                                <div className="price__cost">
                                    <p>450</p><span>$</span>
                                </div>
                            </div>
                        </div>

                        <div className="price__col">
                            <div className="price__item">
                                <div className="price__title">
                                    <p>Все включено</p>
                                </div>
                                <div className="price__includes">
                                    <ul className="price__list">
                                        <li className="price__li-item">Проживание на вилле 6 ночей </li>
                                        <li className="price__li-item">Номер категории люкс</li>
                                        <li className="price__li-item">Экипировка для обучения</li>
                                        <li className="price__li-item">Обучение серфингу 8 тренировок по 2 часа</li>
                                        <li className="price__li-item">Страховка</li>
                                        <li className="price__li-item">Вечеринка с угощениями и дискотекой</li>
                                        <li className="price__li-item">Авиа перелет Тенерифе -Лансароте - Тенерифе</li>
                                        <li className="price__li-item">Завтраки на вилле</li>
                                    </ul>
                                </div>
                                <div className="price__cost">
                                    <p>950</p><span>$</span>
                                </div>
                            </div>
                        </div>

                        <div className="price__col">
                            <div className="price__item">
                                <div className="price__title">
                                    <p>Профи</p>
                                </div>
                                <div className="price__includes">
                                    <ul className="price__list">
                                        <li className="price__li-item">Проживание на вилле 8 ночей </li>
                                        <li className="price__li-item">Номер категории люкс</li>
                                        <li className="price__li-item">Экипировка для обучения</li>
                                        <li className="price__li-item">Обучение серфингу 16 тренировок по 2 часа</li>
                                        <li className="price__li-item">Страховка</li>
                                        <li className="price__li-item">Вечеринка с угощениями и дискотекой</li>
                                        <li className="price__li-item">Авиа перелет Тенерифе -Лансароте - Тенерифе</li>
                                        <li className="price__li-item">Завтраки и ужины на вилле</li>
                                    </ul>
                                </div>
                                <div className="price__cost">
                                    <p>1450</p><span>$</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Price;