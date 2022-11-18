import { useHttp } from "../hooks/https.hook";

const useHvojaService = () => {
    const {loading, request, error, clearError} = useHttp();

    // const _apiBase = 'https://gateway.marvel.com:443/v1/public/characters';
    // const _apiBaseComics = 'https://gateway.marvel.com:443/v1/public/comics';
    // const _apiKey = 'apikey=cba563d54dbd68868980b1b6a1c84860';
    // const _basicOffset = 210;
    // const _comicsOffset = 0;

    const getArmchairs = async () => {
        const res = await request ('tblvDPFY3d3aYYysw');
        return res.map(_transformData)
    }

    const getTables = async () => {
        const res = await request ('tbl6WrMPXtdSdCIfS');
        return res.map(_transformData)
    }

    const getAccess = async () => {
        const res = await request ('tblupOGjNvUKTnJz4');
        return res.map(_transformData)
    }


 


    // const getAllCharacters = async (offset = _basicOffset) => {
    //     const res = await request(`${_apiBase}?limit=9&offset=${offset}&${_apiKey}`);
    //     return res.data.results.map(_transformData)
    // }



    const _transformData = (item) => {
         return {
            id: item.fields.id,
            name: item.fields.name,
            descr: item.fields.descr,
            imgArr: item.fields.imgArr,
            type: item.fields.type,
            img: item.fields.img,
            price: item.fields.price,
            discountPrice: item.fields.discountPrice,
            char: item.fields.char,
            size: item.fields.size,
            discount: item.fields.discount,
            delivery: item.fields.delivery,
         }
    }

    return {loading, error, clearError, getArmchairs, getTables, getAccess}

}

export default useHvojaService;