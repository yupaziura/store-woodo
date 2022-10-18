import './ColorLine.scss';

const ColorLine = ({array, setSmth}) => {

    return (
        <div className="color_line">
            {array.map((item, i)=> {
                return (
                    <div key={i} onClick={()=>{setSmth(item.type)}} className='color_pair'>
                        <div className="color_button" style={{backgroundColor: item.color }}></div>
                        <div className="color_label">{item.name}</div>
                    </div>
                )
            })}

        </div>
    )
}

export default ColorLine;