import './Button.scss';

const CustomButton = (props) => {
    return (
        <>
            <button style={{backgroundColor: props.color}} onClick={()=> props.action()} className='custom_button'>
                {props.text}
            </button>
        </>
    )
}

export default CustomButton;