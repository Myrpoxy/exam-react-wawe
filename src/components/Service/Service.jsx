import './Service.css';

function Service() {
    return(
        <>
        <section className="service" id="service">
            <div className="container">
                <div className="title service__title">
                    <h2>В ШКОЛЕ ВЫ ПОЛУЧИТЕ</h2>

                    <div className="service__grid1">
                        <div className="service__left-habitation">
                            <div className="service__heading">
                                <div className="service__icon">
                                    <img src="/img/service-habitation.svg" alt=""/>
                                </div>
                                {/* <span className="service__icon-desc">ПРОЖИВАНИЕ</span> */}
                                <div className="service__icon-desc">
                                    <h4>ПРОЖИВАНИЕ</h4>
                                </div>
                            </div>
                            <div className="service__desc">
                                <p>Наша школа серфинга находится в 100 м от океанского побережья. К услугам гостей открытый
                                    бассейн и бесплатный Wi-Fi. Из верхней террасы открывается вид на океан. Расстояние до
                                    центра города 15 мин.</p>
                            </div>
                        </div>

                        <div className="service__center-flight">
                            <div className="service__heading">
                                <div className="service__icon">
                                    <img src="/img/service-flight.svg" alt=""/>
                                </div>
                                {/* <span className="service__icon-desc">ПЕРЕЛЕТ И СТРАХОВКУ</span> */}
                                <div className="service__icon-desc">
                                    <h4>ПЕРЕЛЕТ И СТРАХОВКУ</h4>
                                </div>
                            </div>
                            <div className="service__desc">
                                <p>Все участники программы застрахованы страховой компанией Allianz.
                                    Перелет из Тенерифе до острова Лансароте и обратно входит в стоимость программы</p>
                            </div>
                        </div>

                        <div className="service__right-training">
                            <div className="service__heading">
                                <div className="service__icon">
                                    <img src="/img/service-training.svg" alt=""/>
                                </div>
                                {/* <span className="service__icon-desc">ОБУЧЕНИЕ И ЭКИПИРОВКУ</span> */}
                                <div className="service__icon-desc">
                                    <h4>ОБУЧЕНИЕ И ЭКИПИРОВКУ</h4>
                                </div>
                            </div>
                            <div className="service__desc">
                                <p>Все оборудование и экипировка известных производителей и предоставляется на весь курс
                                    программы. Тренировочный процесс начинается с определения вашего уровня катания </p>
                            </div>
                        </div>
                    </div>

                    <div className="service__grid2">
                        <div className="service__left-diagram">
                            <div className="service__diagram">
                                <div className="service__wawe">
                                    <img src="/img/service-diagram1.svg" alt=""/><span>85%</span>
                                </div>
                            </div>
                            <div className="service__descdiagram">
                                <p>Приехали второй раз</p>
                            </div>

                            <div className="service__diagram">
                                <div className="service__wawe">
                                    <img src="/img/service-diagram2.svg" alt=""/><span>95%</span>
                                </div>
                            </div>
                            <div className="service__descdiagram">
                                <p>Научились кататься</p>
                            </div>

                            <div className="service__diagram">
                                <div className="service__wawe">
                                    <img src="/img/service-diagram3.svg" alt=""/><span>99%</span>
                                </div>
                            </div>
                            <div className="service__descdiagram">
                                <p>Довольных клиентов</p>
                            </div>
                        </div>


                        <div className="service__right-method">
                            <div className="service__method">
                                <p>Огромным преимуществом нашей школы является собственная методика обучения. Мы разработали
                                    собственный стиль обучения серфингу, который позволяет новичкам максимально быстро
                                    встать на доску.</p>
                            </div>
                            <div className="service__method">
                                <p>Именно наша методика и наши преподаватели позволили нам пройти аттестацию Федерации
                                    серфинга Канарских островов - FEDERACIÓN CANARIA DE SURF. Это означает, что наша школа
                                    соответствует всем мировым стандартам. Переаттестация производится ежегодно и это
                                    позволяет нам всегда стремиться к улучшению обучения.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Service;