import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
    const refSendForm = useRef();

    const handleSendEmail = (e) => {
        e.preventDefault();

        const publicKEY = import.meta.env.VITE_PUBLIC_KEY;
        const serviceID = import.meta.env.VITE_SERVICE_ID;
        const templateID = import.meta.env.VITE_TEMPLATE_ID;

    
        emailjs.sendForm(serviceID, templateID, refSendForm.current, { publicKey: publicKEY, })
          .then(
            () => { alert('Ваша заявка успешно отправлена!'); },
            (error) => { console.error('EmailJS error:', error); alert('НЕ удалось отправить заявку...'); },
          );

        refSendForm.current.reset();
    };

    return(
        <>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="title service__title">
                        <h2>ОСТАВИТЬ ЗАЯВКУ</h2>
                    </div>

                    <div className="contact__row">
                        <div className="contact__left">
                            <div className="contact__left-item">
                                <form className="contact__form" id="contactForm" onSubmit={handleSendEmail} ref={refSendForm}>
                                    <input type="text" name="name" className="contact__name" id="contactName" required
                                        placeholder="Имя"/>
                                    <input type="tel" name="tel" className="contact__tel" id="contactTel" required
                                        placeholder="Телефон"/>
                                    <textarea name="message" id="textMsg" cols="30" rows="10"
                                        placeholder="Оставьте сообщение, и мы свяжемся с Вами в ближайшее время" ></textarea>
                                    <button type="submit" className="button contact__button" id="contactBtn">ОТПРАВИТЬ</button>
                                </form>
                            </div>
                        </div>

                        <div className="contact__right">
                            <div className="contact__right-item">
                                <div className="contact__text">
                                    <p>Есть вопрос?<br/>Вы можете связаться с нами:</p>
                                </div>
                                <div className="contact__text">
                                    <p>WhatsApp, Viber, Telegram<br/>+3 467 486-37-88</p>
                                </div>
                                <div className="contact__text">
                                    <p>Avenida grandes playas&nbsp;79,<br/>
                                        Corralejo la Oliva Fuerteventura,<br/>Spain. 35660</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="contact__row2">
                        <div className="contact__messenger">
                            <a href="https://www.instagram.com/isscamp__canaries/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                        </div>
                        <div className="contact__messenger">
                            <a href="https://www.facebook.com/groups/178146135626423" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
                        </div>
                        <div className="contact__messenger">
                            <a href="https://www.youtube.com/@issfiji" target="_blank" rel="noopener noreferrer">YOUTUBE</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;