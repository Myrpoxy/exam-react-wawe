import './Team.css';

function Team() {
    return(
        <>
            <section className="team" id="team">
                <div className="container">
                    <div className="title service__title">
                        <h2>НАША КОМАНДА</h2>
                    </div>

                    <div className="team__row">
                        <div className="team__col">
                            <div className="team__item">
                                <div className="team__icon"><img src="/img/team-1.jpg" alt=""/></div>
                                <div className="team__name">
                                    <p>Mike</p>
                                </div>
                                <div className="team__profession">
                                    <p>Главный инстуктор</p>
                                </div>
                            </div>
                        </div>

                        <div className="team__col">
                            <div className="team__item">
                                <div className="team__icon"><img src="/img/team-2.jpg" alt=""/></div>
                                <div className="team__name">
                                    <p>Mary</p>
                                </div>
                                <div className="team__profession">
                                    <p>инстуктор</p>
                                </div>
                            </div>
                        </div>

                        <div className="team__col">
                            <div className="team__item">
                                <div className="team__icon"><img src="/img/team-3.jpg" alt=""/></div>
                                <div className="team__name">
                                    <p>Ольга</p>
                                </div>
                                <div className="team__profession">
                                    <p>инстуктор</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Team;