import { useState, useCallback } from "react";


export const useHttp = () => {

    

    const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = useCallback(async (name) => {

        // setLoading(true);
        // const Airtable = require('airtable');
        // const base = new Airtable({apiKey: apiKey}).base('appwJpTH0iQwh6Znk');
        
        // base(name).select({
        //   view: 'Grid view'
        // }).firstPage(  function(err, records) {
        //   if (err) { 
        //         console.error(err); 
        //         setLoading(false);
        //         setError(err);
        //         return; 
        //     }
        // //   records.forEach(function(record) {
        // //       console.log('Retrieved', record.get('id'));
        // //   });
        // return records
        // });

        

        // try{
        //     const response = await fetch (name);

        //     if(!response.ok) {
        //         throw new Error (`Could not fetch ${url}, status: ${response.status}`)
        //     }

        //     const data = await response.json();

        //     setLoading(false);
        //     return(data);
            

        // } catch (e) {
        //     setLoading(false);
        //     setError(e.message);
        //     throw e;
        // }
        // https://airtable.com/appwJpTH0iQwh6Znk/tblvDPFY3d3aYYysw/viwrqsQT7EvPFJYmr/recERXVxAvJaVEOMy/fldOtTFOGM1LepkVV?copyLinkToCellOrRecordOrigin=gridView

        fetch(`https://api.airtable.com/v0/appwJpTH0iQwh6Znk/tblvDPFY3d3aYYysw?api_key=${apiKey}`)
			.then(res => res.json())
			.then(res => {
				console.log(res.records)
				// this.setState({ booksData: res.records });
                return res.records
			})
			.catch(error => console.log(error))

    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return {loading, request, error, clearError}

}

