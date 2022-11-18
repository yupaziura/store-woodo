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

    // const getAllComics = async (offset = _comicsOffset, limit = 9) => {
    //     const res = await request(` ${_apiBaseComics}?limit=${limit}&offset=${offset}&${_apiKey}`);
    //     return res.data.results.map(_transformDataComics)
    // }

    // const getComic = async (id) => {
    //     const res = await request(`${_apiBaseComics}/${id}?${_apiKey}`);
    //     return _transformDataComics(res.data.results[0])
    // }

    // const getCharacter = async (id) => {
    //     const res = await request(`${_apiBase}/${id}?${_apiKey}`);
    //     return _transformData(res.data.results[0])
    // }

    // const checkDescr = (descr) => {
    //     if (!descr) {
    //         return 'Sorry, there is no information about this character. Go to homepage.'
    //     }
    //     else if (descr.length >= 200) {
    //         return descr.substring(0, 200) + '...'
    //     }
    //     else {return descr}
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

    // const _transformDataComics = (item) => {
    //     return {
    //        id: item.id,
    //        title: item.title,
    //        price: item.prices[0].price !== 0? item.prices[0].price + ' $' : item.prices[0].price,
    //        img: item.thumbnail.path + '.' + item.thumbnail.extension,
    //        pages: item.pageCount,
    //        descr: item.textObjects[0]?.text? item.textObjects[0]?.text : 'No information',
    //        language: item.textObjects[0]?.language? item.textObjects[0]?.language : '-',
    //     }
    // }

    // return {loading, error,process,  getAllCharacters, getCharacter, clearError, getAllComics, getComic}
    return {loading, error, getArmchairs, getTables, getAccess}

}

export default useHvojaService;