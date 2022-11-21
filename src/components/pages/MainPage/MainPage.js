import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet-async";

import CustomButton from '../../Button/Button';

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
                    content="Main page"
                />
                <title>Hvoja</title>
            </Helmet>

            <div className="main_page">
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