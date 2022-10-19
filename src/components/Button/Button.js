import './Button.scss';

const CustomButton = (props) => {
    return (
        <>
            <button style={{backgroundColor: props.color, padding: props.padding, height: props.height}} onClick={()=> props.action()} className='custom_button'>
                {props.text}
            </button>
        </>
    )
}

export default CustomButton;