import './Galery.css';

function Galery() {
    // const photoIDs =[ {id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}, ];

    return(
        <>
            <section className="galery" id="galery">
                <div className="container">
                    <div className="title service__title">
                        <h2>ГАЛЕРЕЯ</h2>
                    </div>

                    <nav className="galery__menu">
                        <ul className="galery__list">
                            <li className="galery__item"><a href="#" class="galery__link">ВСЕ</a></li>
                            <li className="galery__item"><a href="#" class="galery__link">ТУРИСТЫ</a></li>
                            <li className="galery__item"><a href="#" class="galery__link">ПРИРОДА</a></li>
                            <li className="galery__item"><a href="#" class="galery__link">ПРОФИ</a></li>
                        </ul>
                    </nav>

                    <div className="galery__grid">
                        { 
                            Array.from({length: 6}, (_, index) => <div key={index} className={`galery__g-item item${index + 1}`}>
                                <img src={`/img/galery-icon${index + 1}.jpg`} alt=""/>
                            </div> ) 
                        }
                        {/* <div className="galery__g-item item1">
                            <img src="/img/galery-icon1.jpg" alt=""/>
                        </div>
                        <div className="galery__g-item item2">
                            <img src="/img/galery-icon2.jpg" alt=""/>
                        </div>
                        <div className="galery__g-item item3">
                            <img src="/img/galery-icon3.jpg" alt=""/>
                        </div>
                        <div className="galery__g-item item4">
                            <img src="/img/galery-icon4.jpg" alt=""/>
                        </div>
                        <div className="galery__g-item item5">
                            <img src="/img/galery-icon5.jpg" alt=""/>
                        </div>
                        <div className="galery__g-item item6">
                            <img src="/img/galery-icon6.jpg" alt=""/>
                        </div> */}
                    </div>

                    <form action="post" className="galery__form">
                        <button className="button galery__button">ПОКАЗАТЬ ЕЩЕ</button>
                    </form>

                </div>
            </section>
        </>
    );
}

export default Galery;