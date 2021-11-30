
import { useState, useEffect, useMemo, useCallback } from 'react'
import { indicatorData } from '../api/minIncadorApi'


export const useApiData_tipo_indicador = () => {

     const [isLoadingdataIndicatorTipo_indicador, setIsLoadingdataIndicator] = useState<boolean>(true)
     const [dataTipo_indicador, setdataTipo_indicador] = useState<any>()

     const getApTipo_indicador = async (tipo_indicador: string) => {
          const resp = await indicatorData.get(`https://mindicador.cl/api/${tipo_indicador}`)
          setdataTipo_indicador(resp.data);
          setIsLoadingdataIndicator(false);
     }



     const memo = useMemo(() => {
          return {
               isLoadingdataIndicatorTipo_indicador,
               dataTipo_indicador,
               getApTipo_indicador
          }
     }   , [isLoadingdataIndicatorTipo_indicador, dataTipo_indicador, getApTipo_indicador])


     return memo
}