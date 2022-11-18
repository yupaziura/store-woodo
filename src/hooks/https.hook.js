import { useState, useCallback } from "react";


export const useHttp = () => {

    

    const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = useCallback(async (table) => {

        setLoading(true);        

        try{
            const response = await fetch(`https://api.airtable.com/v0/appwJpTH0iQwh6Znk/${table}?api_key=${apiKey}`)


            if(!response.ok) {
                throw new Error (`Could not fetch , status: ${response.status}`)
            }

            const data = await response.json();

            setLoading(false);
            return(data.records);
            

        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }

        // fetch(`https://api.airtable.com/v0/appwJpTH0iQwh6Znk/tblvDPFY3d3aYYysw?api_key=${apiKey}`)
		// 	.then(res => res.json())
		// 	.then(res => {
		// 		console.log(res.records)
		// 		// this.setState({ booksData: res.records });
        //         return res.records
		// 	})
		// 	.catch(error => console.log(error))

    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return {loading, request, error, clearError}

}

