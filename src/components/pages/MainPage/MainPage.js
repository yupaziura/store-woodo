import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet-async";

import CustomButton from '../../Button/Button';
import Proposal from '../../Donate/Proposal';

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

            <Helmet>
                <meta
                    name="description"
                    content="Hvoja - інтернет магазин меблів та аксесуарів з дерева. Даруємо затишок та комфорт. Використовуємо натуральні матеріали."
                />
                <meta name="keywords" content="меблі, дерево, крісла, підставки, магазин меблів"/>
                <title>Hvoja - інтернет магазин меблів</title>
            </Helmet>

            <div className="main_page">
                <Proposal/>
                <div className="headers">
                    <h1>
                        hvoja
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
        </>
    )
}

export default MainPage;