import { useState, useEffect } from 'react';
import {Helmet} from "react-helmet-async";

import { Spinner } from "react-bootstrap";
import ProductCard from '../../ProductCard/ProductCard';
import Error from '../../Error/Error';



import './Promotion.scss';

const Promotion = (props) => {


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
                <title>Акції</title>
            </Helmet>

            <div className="container">


                <h1 className='promo_subtitle'>ТОВАРИ ЗА АКЦІЙНОЮ ЦІНОЮ</h1>

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
                                    <ProductCard setRootId={props.setRootId} item={item} num={i} type='accessoires'/>
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