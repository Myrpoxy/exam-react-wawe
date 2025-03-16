import './Header.css';
import React, { useState, useEffect, useRef } from 'react';

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) { setIsMenuOpen(false); }},
            { root: null,  threshold: 0,} );

        if (menuRef.current) { observer.observe(menuRef.current); }

        return () => { if (menuRef.current) { observer.unobserve(menuRef.current); } };
    }, [menuRef]);

	return (
		<>
			<header className="header">
                <div className="container">
                    <div className="header__row">
                        <div className="logo header__logo">
                            <img src="/img/header-logo.svg" alt="Логотип" />
                        </div>

                        <div className="menu menu__header">
                            <nav className={`menu__raw ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
                                <ul className="menu__list">
                                    <li className="menu__item"><a href="#aboutus" className="menu__link">О&nbsp;нас</a></li>
                                    <li className="menu__item"><a href="#service" className="menu__link">Услуги</a></li>
                                    <li className="menu__item"><a href="#price" className="menu__link">Стоимость</a></li>
                                    <li className="menu__item"><a href="#blog" className="menu__link">Блог</a></li>
                             	    <li className="menu__item"><a href="#team" className="menu__link">Команда</a></li>
                                    <li className="menu__item"><a href="#contact" className="menu__link">Контакты</a></li>
                                </ul>
                            </nav>

                            <button className="menu__toggle" aria-label="Toggle menu" onClick={toggleMenu}>
                                <span className="menu__toggle__bar"></span>
                                <span className="menu__toggle__bar"></span>
                                <span className="menu__toggle__bar"></span>
                            </button>
                        </div>
                    </div>
                </div>
        	</header>
		</>
	);
}

export default Header;