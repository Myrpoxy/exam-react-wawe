import './Digits.css';

function Digits() {
    return(
        <>
            <section className="digits" id="digits">
                <div className="container">
                    <div className="digits__row">
                        <div className="digits__item">
                            <div className="digits__number">
                                <p>450</p>
                            </div>
                            <div className="digits__desc">
                                <p>туристов</p>
                            </div>
                        </div>
                        <div className="digits__item">
                            <div className="digits__number">
                                <p>2500</p>
                            </div>
                            <div className="digits__desc">
                                <p>часов катания</p>
                            </div>
                        </div>
                        <div className="digits__item">
                            <div className="digits__number">
                                <p>10</p>
                            </div>
                            <div className="digits__desc">
                                <p>проф. тренеров</p>
                            </div>
                        </div>
                        <div className="digits__item">
                            <div className="digits__number">
                                <p>365</p>
                            </div>
                            <div className="digits__desc">
                                <p>дней в году</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Digits;