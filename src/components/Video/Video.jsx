import './Video.css';

function Video() {
    return(
        <>
            <section className="video" id="video">
                <div className="container">
                    <div className="video__content">
                        {/* <img src="/img/video-bg.jpg" alt=""/> */}
                        <iframe 
                            className="video__iframe"
                            title='VK video'
                            src="https://vkvideo.ru/video_ext.php?oid=145378063&id=456239318&hd=2&autoplay=0" 
                            allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" 
                            allowFullScreen>
                        </iframe>
                        {/* <img src="/img/video-play.svg" alt="" class="video__play"/> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Video;