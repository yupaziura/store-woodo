import { useState, useEffect } from 'react';

import { Spinner } from "react-bootstrap";
import ProductCard from '../../ProductCard/ProductCard';



import './Promotion.scss';

const Promotion = (props) => {

   

  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const deadline = "November, 31, 2022";

    function checkNum(num) {

        let res = num;

        if (num >= 0 && num < 10) {
            res = '0' + String(num);

            return res
        } else {
            return num
        }

    }

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(checkNum(Math.floor(time / (1000 * 60 * 60 * 24))));
    setHours(checkNum(Math.floor((time / (1000 * 60 * 60)) % 24)));
    setMinutes(checkNum(Math.floor((time / 1000 / 60) % 60)));
    setSeconds(checkNum(Math.floor((time / 1000) % 60)));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);


  const [data, setData] = useState([]);

  const onLoaded = (data) => {
      setData(data.sort((a,b) => a.id - b.id) );
      console.log(data)
  }

  const onRequest = () => {
      props.getItem().then(onLoaded);
  }

  useEffect(() => {onRequest()}, []);


    return (
        <>
            <div className="container">

                <div className="promo_card">
                    <h2 className='promo_title'>BLACK FRIDAY</h2>
                    <div className="promo_wrapper">
                        <div className="promo_text">
                            <h2 className='promo_header'>Акція діє до 31.11.22</h2>
                            <p className='promo-descr'>Знижки до -50%!</p>
                        </div>

                        <div className="promo_timer">
                            <div>
                                <div className="timer_container">{days}</div>
                                <div className='timer_descr'  style={{textAlign: 'center'}}>дні</div>
                            </div>
                            <div>
                                <div className="timer_container">{hours}</div>
                                <div className='timer_descr'  style={{textAlign: 'center'}}>години</div>
                            </div>
                            <div>
                                <div className="timer_container">{minutes}</div>  
                                <div className='timer_descr'  style={{textAlign: 'center'}}>хвилини</div>
                            </div>
                            <div>
                                <div className="timer_container">{seconds}</div> 
                                <div  className='timer_descr' style={{textAlign: 'center'}}>секунди</div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className='promo_subtitle'>ТОВАРИ ЗА АКЦІЙНОЮ ЦІНОЮ</h2>

                {props.loading? 

                    <div style={{textAlign: 'center'}}>
                        <Spinner animation="border" role="status" >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                        : 
    
                    props.error? <h5>{'Вибачте, сталася помилка :('}</h5> : 

                    <div className="promo_items">
                        {data.filter(item => {
                            return item.discount === true
                        })
                        .map((item, i) => {
                            return (
                                <div key={i}>
                                    <ProductCard setRootId={props.setRootId} item={item} num={i} type='armchairs'/>
                                </div>
                            )
                        })
                        }
                    </div>
                }
                
            </div>
        </>
    )
}

export default Promotion;