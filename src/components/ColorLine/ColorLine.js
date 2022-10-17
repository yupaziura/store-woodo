const ColorLine = ({array, setSmth}) => {

    return (
        <div>
            {array.map((item, i)=> {
                return (
                    <div key={i} onClick={()=>{setSmth(item.type)}}>
                        <button style={{width: '10px', height: '10px', backgroundColor: item.color }}></button>
                        <span >{item.name}</span>
                    </div>
                )
            })}

        </div>
    )
}

export default ColorLine;