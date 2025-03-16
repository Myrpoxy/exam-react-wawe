import './Hero.css';

function Hero({ children }) {
	return (
        <>
            <div className='hero'>
                {children}

                <div className="container">
                    <div className="hero__center">
                        <div className="hero__title">
                            <h1 className="hero__title">WAWE</h1>
                        </div>
                        <div className="hero__desc">
                            <p>Школа серфинга на канарских Островах</p>
                        </div>
                        <div className="hero__icon">
                            <img src="/img/hero-serf.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
	);
}

export default Hero;