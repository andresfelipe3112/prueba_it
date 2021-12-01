import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { getApi } from '../intefaces/interfaces';
import ContainterValue from './ContainterValue';


function ItemIndicadores(data: any) {

    const { height, width } = Dimensions.get("window")

    const {
        bitcoin,
        dolar,
        euro,
        imacec,
        ipc,
        ivp,
        libra_cobre,
        tasa_desempleo,
        tpm,
        uf,
        utm
    }: getApi = data.data || {}

    return (
        <View
            style={{
                width: width,
                alignSelf: "center",
                borderRadius: 40,
                marginTop: -39,
                marginBottom: 30
            }}
        >
            <ContainterValue data={bitcoin} />
            <ContainterValue data={dolar} />
            <ContainterValue data={euro} />
            <ContainterValue data={imacec} />
            <ContainterValue data={ipc} />
            <ContainterValue data={ivp} />
            <ContainterValue data={libra_cobre} />
            <ContainterValue data={tasa_desempleo} />
            <ContainterValue data={tpm} />
            <ContainterValue data={uf} />
            <ContainterValue data={utm} />
        </View>
    )
}

export default ItemIndicadores
