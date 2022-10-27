import { useState } from 'react';

import './ColorLine.scss';

const ColorLine = ({array, setSmth, title, setSmthUA}) => {

    const [activeId, setActiveId] = useState('');


    const selectAction = (item, i) => {
        setSmth(item.type);
        setSmthUA(item.name);
        setActiveId(i);
    }


    return (
        <div className="color_line">
            <h5>{title}</h5>
            {array.map((item, i)=> {
                return (
                    <div key={i} onClick={()=>{selectAction(item, i)}} className={activeId === i? 'active color_pair' : 'color_pair'}>
                        <div className={activeId === i? 'active color_button' : 'color_button'} style={{backgroundColor: item.color }}></div>
                        <div className="color_label">{item.name}</div>
                    </div>
                )
            })}

        </div>
    )
}

export default ColorLine;