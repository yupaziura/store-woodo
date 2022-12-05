import { useState, useEffect } from 'react';
import {Helmet} from "react-helmet-async";

import { Spinner } from "react-bootstrap";
import ProductCard from '../../ProductCard/ProductCard';
import Error from '../../Error/Error';

import './Promotion.scss';

const PromotionSpecial = (props) => {
    const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const deadline = "January, 1, 2023";

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
  }

  const onRequest = () => {
      props.getItem().then(onLoaded);
  }

  useEffect(() => {onRequest()}, []);


    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Promotions"
                />
                <title>Спеціальні пропозиції</title>
            </Helmet>

            <div className="container">

                <div className="promo_card">
                    <div className="promo_header_main">
                        <img className='promo_img_left' src={require('../../../img/icons/xmas_omela.png')} alt="" />
                        <h2 className='promo_title'>НОВОРІЧНІ ЗНИЖКИ </h2>
                        <img className='promo_img_right' src={require('../../../img/icons/xmas_omela.png')} alt="" />
                    </div>
                    
                    <div className="promo_wrapper">
                        <div className="promo_text">
                            <h2 className='promo_header'>до -50%</h2>
                            <p className='promo-descr'>затишок та комфорт у подарунок</p>
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

                        {/* <div className="" style={{width: '90px'}}>
                            <img style={{width: '100%'}} src={require('../../../img/icons/xmas_tree.png')} alt="" />
                        </div> */}
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
    
                    props.error? <Error/> : 

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

export default PromotionSpecial;