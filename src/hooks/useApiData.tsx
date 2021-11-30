
import { useState, useEffect, useMemo } from 'react'
import {indicatorData} from '../api/minIncadorApi'


export const useApiData = ( ) => {
 
     const [ isLoadingdataIndicator, setIsLoadingdataIndicator ] = useState<boolean>(true)
     const [ dataIndicator, setdataIndicator] = useState<any>()

    const getApi = async() => {
        const resp = await indicatorData.get(`https://mindicador.cl/api`)
         setdataIndicator( resp.data );
         setIsLoadingdataIndicator(false);
    }

    
    useEffect(() => {
        getApi();
    }, [])

    const memo = useMemo(() => {
        return {
            isLoadingdataIndicator,
            dataIndicator
        }
    }
        , [isLoadingdataIndicator, dataIndicator])


    return memo
}