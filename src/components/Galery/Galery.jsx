import './Galery.css';
import React, { useState } from 'react';

function Galery() {
    // const photoIDs =[ {id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}, ];
    const [selectedCategory, setSelectedCategory] = useState('icon');
    const handleCategoryClick = (category) => { setSelectedCategory(category); };

    // const photos = {
    //     all: Array.from({ length: 6 }, (_, index) => `/img/galery-icon${index + 1}.jpg`),
    //     tourists: Array.from({ length: 6 }, (_, index) => `/img/galery-tourists${index + 1}.jpg`),
    //     nature: Array.from({ length: 6 }, (_, index) => `/img/galery-nature${index + 1}.jpg`),
    //     profi: Array.from({ length: 6 }, (_, index) => `/img/galery-profi${index + 1}.jpg`),
    // };

    return(
        <>
            <section className="galery" id="galery">
                <div className="container">
                    <div className="title service__title">
                        <h2>ГАЛЕРЕЯ</h2>
                    </div>

                    <nav className="galery__menu">
                        <ul className="galery__list">
                            {/* <li className="galery__item" onClick={() => handleCategoryClick('all')}><a href="#" class="galery__link">ВСЕ</a></li>
                            <li className="galery__item" onClick={() => handleCategoryClick('tourists')}><a href="#" class="galery__link">ТУРИСТЫ</a></li>
                            <li className="galery__item" onClick={() => handleCategoryClick('nature')}><a href="#" class="galery__link">ПРИРОДА</a></li>
                            <li className="galery__item" onClick={() => handleCategoryClick('profi')}><a href="#" class="galery__link">ПРОФИ</a></li> */}
                            <li className="galery__item" onClick={() => handleCategoryClick('icon')}><p>ВСЕ</p></li>
                            <li className="galery__item" onClick={() => handleCategoryClick('tourists')}><p>ТУРИСТЫ</p></li>
                            <li className="galery__item" onClick={() => handleCategoryClick('nature')}><p>ПРИРОДА</p></li>
                            <li className="galery__item" onClick={() => handleCategoryClick('profi')}><p>ПРОФИ</p></li>
                        </ul>
                    </nav>

                    <div className="galery__grid">
                        { 
                            Array.from({length: 6}, (_, index) => <div key={index} className={`galery__g-item item${index + 1}`}>
                                <img src={`/img/galery-${selectedCategory}${index + 1}.jpg`} alt=""/>
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