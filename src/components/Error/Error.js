import { Link } from 'react-router-dom';

import './Error.scss';

const Error = () => {
    return (
        <>
        <div className="error_container">
            <div className="error">
                <h4>{`Вибачте, сталася помилка :(`}</h4>
                <p>
                <Link to='/'>← Повернутися до головного меню</Link>
                </p>
            </div>
        </div>
        </>
    )
}

export default Error;