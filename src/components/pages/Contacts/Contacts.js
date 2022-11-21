import {ReactComponent as Phone} from '../../../img/icons/phone.svg';
import {ReactComponent as Envelope} from '../../../img/icons/envelope.svg';
import {ReactComponent as Telegram} from '../../../img/icons/telegram.svg';
import {ReactComponent as Address} from '../../../img/icons/direction.svg';
import {Helmet} from "react-helmet-async";


import './Contacts.scss';

const Contacts = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Contacts page"
                />
                <title>Контакти</title>
            </Helmet>

            <div className='contacts'>
                <div className="container">
                <h3 className="contacts_title">контакти</h3>

                    <div className="contacts_card">
                        <div className="card_row">
                            <div className="card_pair">
                                <Phone/>
                                <div className="card_pair_name">Телефон</div>
                            </div>
                            <div className="card_data">
                                <a href="tel: +380965439828" className="test">+380 96 543 9828</a>
                            </div>
                        </div>

                        <div className="card_row">
                            <div className="card_pair">
                                <Envelope/>
                                <div className="card_pair_name">Пошта</div>
                            </div>
                            <div className="card_data">
                                <a href="mailto: hvoja.store@gmail.com" className="test">hvoja.store@gmail.com</a>
                            </div>
                        </div>

                        <div className="card_row">
                            <div className="card_pair">
                                <Telegram/>
                                <div className="card_pair_name">Telegram</div>
                            </div>
                            <div className="card_data">
                                <a href="https://t.me/polyglot18" className="test">написати в Telegram</a>
                            </div>
                        </div>

                        <div className="card_row">
                            <div className="card_pair">
                                <Address/>
                                <div className="card_pair_name">Адреса</div>
                            </div>
                            <div className="card_data">
                                вул. Польова 101, с. Плесецьке, Київська обл., Україна
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contacts;