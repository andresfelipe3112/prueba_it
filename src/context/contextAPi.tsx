import React, { createContext } from "react";
import { View } from "react-native";
import { useApiData } from "../hooks/useApiData";
import { useApiData_tipo_indicador } from "../hooks/useApiData_tipo_indicador";
import { getApi, Bitcoin } from "../intefaces/interfaces"

export const DataContext = createContext({})

export interface Props {
    dataIndicator?: getApi;
    isLoadingdataIndicator?: boolean;
    isLoadingdataIndicatorTipo_indicador?: boolean;
    dataTipo_indicador?: Bitcoin;
    getApTipo_indicador?: (() => void) | undefined | any
}




function ContextAPi({ children }: any) {

    const { isLoadingdataIndicator, dataIndicator }: Props = useApiData()
    const { isLoadingdataIndicatorTipo_indicador,
        dataTipo_indicador,
        getApTipo_indicador
    }: any = useApiData_tipo_indicador()

    return (
        <DataContext.Provider value={{
            isLoadingdataIndicator,
            dataIndicator,
            isLoadingdataIndicatorTipo_indicador,
            dataTipo_indicador,
            getApTipo_indicador
        }} >
            {children}
        </DataContext.Provider>
    )
}
export default ContextAPi
