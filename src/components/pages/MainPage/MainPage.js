import { useNavigate } from 'react-router-dom'

import CustomButton from '../../Button/Button';
import Promotion from '../../Promotion/Promotion';

import './MainPage.scss';

const MainPage = ({setShow}) => {

    const navigate = useNavigate();

    const actionCatalog = () => {
        navigate('/catalog');
    }

    const actionConstructor = () => {
        setShow(true)
    }

    return (
        <>
            <div className="main_page">
                <div className="headers">
                    <h1>
                        woodo
                    </h1>
                    <h2>
                        дерев'яні меблі та аксесуари
                    </h2>
                </div>

                <div className="buttons">
                    <CustomButton text='каталог' action={actionCatalog}/>
                    <CustomButton text='конструктор' action={actionConstructor}/>
                </div>
            </div>

            <div className="">
                <Promotion/>
            </div>
        </>
    )
}

export default MainPage;