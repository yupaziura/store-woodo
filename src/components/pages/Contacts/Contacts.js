import {ReactComponent as Phone} from '../../../img/icons/phone.svg';
import {ReactComponent as Envelope} from '../../../img/icons/envelope.svg';
import {ReactComponent as Telegram} from '../../../img/icons/telegram.svg';
import {ReactComponent as Address} from '../../../img/icons/direction.svg';


import './Contacts.scss';

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className="container">
            <h3 className="contacts_title">contacts</h3>

                <div className="contacts_card">
                    <div className="card_row">
                        <div className="card_pair">
                            <Phone/>
                            <div className="card_pair_name">Phone</div>
                        </div>
                        <div className="card_data">
                            <a href="tel: +380502753961" className="test">+380 00 000 0000</a>
                        </div>
                    </div>

                    <div className="card_row">
                        <div className="card_pair">
                            <Envelope/>
                            <div className="card_pair_name">Email</div>
                        </div>
                        <div className="card_data">
                            <a href="mailto: yuliiapaziura@gmail.com" className="test">client@woodo.com</a>
                        </div>
                    </div>

                    <div className="card_row">
                        <div className="card_pair">
                            <Telegram/>
                            <div className="card_pair_name">Telegram</div>
                        </div>
                        <div className="card_data">
                            <a href="https://t.me/smth" className="test">contact via telegram</a>
                        </div>
                    </div>

                    <div className="card_row">
                        <div className="card_pair">
                            <Address/>
                            <div className="card_pair_name">Address</div>
                        </div>
                        <div className="card_data">
                            Unknown str., Kyiv, Ukraine
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contacts;