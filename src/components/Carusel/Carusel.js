import { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';


const Slider = ({ products, handleShow, type, id}) => {

    const [indexSl, setIndexSl] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndexSl(selectedIndex);
    };


    return (
        <>
            <Carousel variant="dark" style={{maxWidth:'100%'}} activeIndex={indexSl} onSelect={handleSelect} interval={null}>
                            
                {products[type][id]?.imgArray?.map((item, i)=> {
                    return (
                        
                        <Carousel.Item onClick={handleShow} key={i}>
                            <img
                            className="d-block w-100"
                            src={item}
                            alt="First slide"
                            style={{maxWidth:'100%'}}
                            />
                        </Carousel.Item>
                        
                    )
                })}
            
            </Carousel>
        </>
    )
}

export default Slider;