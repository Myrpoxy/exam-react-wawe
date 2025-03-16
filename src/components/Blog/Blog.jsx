import './Blog.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Blog() {
    return(
        <>
            <section className="blog" id="blog">
                <div className="container">
                    <div className="title service__title">
                        <h2>БЛОГ</h2>
                    </div>
                </div>

                <div className="slider">
                    <div className="slider__items">
                        {/* <Swiper slidesPerView={3}> */}
                        {/* <Swiper pagination={{dynamicBullets: true, appendDots: '.slider__scroller'}} modules={[Pagination]} className="mySwiper"> */}
                        {/* <Swiper pagination={{dynamicBullets: true}} modules={[Pagination]} className="mySwiper"> */}
                        <Swiper pagination={true} loop={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide>
                        <div className="slider__item item1">
                            <div className="container">
                                <div className="slider__row">
                                    <div className="slider__title">
                                        <p>ЧТО НЕОБХОДИМО ВЗЯТЬ С СОБОЙ НА СЕРФ ТУР</p>
                                    </div>
                                    <div className="slider__desc">
                                        <p>ТОП 20 необходимых вещей для комфортного отдыха и обучения</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="slider__item item2">
                            <div className="container">
                                <div className="slider__row">
                                    <div className="slider__title">
                                        <p>ЧТО НЕОБХОДИМО ВЗЯТЬ С СОБОЙ НА СЕРФ ТУР</p>
                                    </div>
                                    <div className="slider__desc">
                                        <p>ТОП 20 необходимых вещей для комфортного отдыха и обучения</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="slider__item item3">
                            <div className="container">
                                <div className="slider__row">
                                    <div className="slider__title">
                                        <p>ЧТО НЕОБХОДИМО ВЗЯТЬ С СОБОЙ НА СЕРФ ТУР</p>
                                    </div>
                                    <div className="slider__desc">
                                        <p>ТОП 20 необходимых вещей для комфортного отдыха и обучения</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        </Swiper>           
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;