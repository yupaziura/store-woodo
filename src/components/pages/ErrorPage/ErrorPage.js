import {Helmet} from "react-helmet-async";

import Error from "../../Error/Error";


const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Catalog page"
                />
                <title>Меню</title>
            </Helmet>
        <Error/>
        </>
    )
}

export default ErrorPage;