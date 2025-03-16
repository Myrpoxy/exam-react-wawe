import './Apex.css';

function Apex() {
    return(
        <>
        <section className="apex" id="apex">
            <div className="apex__icon">
                <img src="/img/apex.jpg" alt=""/>
            </div>

            <div className="container">
                <div className="apex__row">
                    <div className="title apex__title title--big2">
                        <h2>ПОКОРЯЙ ВЕРШИНЫ</h2>
                    </div>
                    <div className="apex__text apex__text--first">
                        <p>Преподаватели нашей школы серфинга в числе лучших серферов на Канарских островах. Среди них -
                            чемпион Европы по лонгборду, который с радостью поделится опытом как с новичками, так и более
                            опытными серферами.
                            Все члены преподавательского состава являются сертифицированными членами Федерации серфинга
                            Канарских островов. Некоторые из них знают русский язык, что определенно позиционирует нас как
                            русскую школу серфинга за границей!</p>
                    </div>
                    <div className="apex__text">
                        <p>Весь тренерский состав регулярно участвует в семинарах и курсах повышения квалификации, которые
                            проводятся по всему миру различными известными серф-клубами и федерациями. Поэтому в нашей школе
                            серфинга вы можете быть спокойны: вас обучают лучшие тренеры!</p>
                    </div>
                    <div className="apex__text">
                        <p>Методика обучения серфингу рассчитана как на новичков, на серферов среднего уровня, так и на
                            серферов уровня ТОП. Тренеры находят подход к каждому, несмотря на то, что обучение серфингу в
                            нашей школе производится в группах. Однако, мы предлагаем персональные уроки серфинга - только
                            вы и тренер!</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Apex;