import { useHttp } from "../hooks/https.hook";

const useHvojaService = () => {
    const {loading, request, error, clearError} = useHttp();


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

    const getAllProducts = async () => {
        const arm = await request ('tblvDPFY3d3aYYysw');
        const table = await request ('tbl6WrMPXtdSdCIfS');
        const access = await request ('tblupOGjNvUKTnJz4');

        const res = [...arm, ...table, ...access];
        return res.map(_transformData);
    }

    const getWoodArr = async () => {
        const res = await request ('tbl94GDZI8SH5wDhA');
        return res.map(_transformDataMaterials)
    }

    const getFabricArr = async () => {
        const res = await request ('tbliPS1mFi4eORCHJ');
        return res.map(_transformDataMaterials)
    }


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

    const _transformDataMaterials = (item) => {
        return {
           id: item.fields.id,
           name: item.fields.name,
           type: item.fields.type,
           color: item.fields.color,
        }
   }

    return {loading, error, clearError, getArmchairs, getTables, getAccess, getWoodArr, getFabricArr, getAllProducts}

}

export default useHvojaService;