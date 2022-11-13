import { useState, useEffect } from 'react';



import './Promotion.scss';

const Promotion = () => {

   

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "November, 31, 2022";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

 


    return (
        <>
            <div className="container">

                <h2 className='promo_title'>УВАГА ЗНИЖКИ!</h2>
                <div className="promo_wrapper">
                    <div className="promo_text">
                        <h2 className='promo_header'>Акція до 11.11</h2>
                        <p className='promo-descr'>Знижки до -50%!</p>
                    </div>

                    <div className="promo_timer">
                        <div className="timer_container">{days}</div>
                        <div className="timer_container">{hours}</div>
                        <div className="timer_container">{minutes}</div>
                        <div className="timer_container">{seconds}</div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Promotion;