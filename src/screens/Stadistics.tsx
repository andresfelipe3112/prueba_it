import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { View, StyleSheet, Dimensions, Text, SafeAreaView, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import { DataContext, Props } from '../context/contextAPi'
import { BACKGROUND_COLOR, PRIMARY_COLOR } from '../theme/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles, stylesText } from '../theme/appTheme';
import ContainterValueType from '../components/ContainterValueType';

import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'



const { height, width } = Dimensions.get("window")
const screenWidth = Dimensions.get("window").width;

function Stadistics({ route, navigation }: any) {

    const [state, setstate] = useState<number[]>([])
    const [stateData, setstateData] = useState<string[] | undefined>()


    const axesSvg = { fontSize: 10, fill: 'white', Padingleft: 10, };
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30


    const {
        dataTipo_indicador,
        isLoadingdataIndicatorTipo_indicador,
        getApTipo_indicador
    }: Props = useContext(DataContext) || {}

    const { codigo, unidad_medida, valor, fecha, nombre } = route.params || {}
    const { serie }: any = dataTipo_indicador || {}

    useEffect(() => {
        let array: number[] = [];
        let dataF: string[] = [];
        serie !== undefined && serie.slice(0, 9).forEach((x: any) => array.push(x.valor));
        serie !== undefined && serie.slice(0, 9).forEach((x: any) => dataF.push(x.fecha.slice(0, 10)));
        setstateData(dataF)
        setstate(array)
    }, [getApTipo_indicador])


    useEffect(() => {
        getApTipo_indicador(codigo)
    }, [codigo, isLoadingdataIndicatorTipo_indicador])


    return (
        <SafeAreaView style={[{ flex: 1 }, globalStyles.container]}>

            <View
                style={[globalStyles.sectionContainerHome]}
            >
                <Icon
                    name="chevron-back-outline"
                    size={40}
                    color={"#CAC9CA"}
                    onPress={() => {
                        navigation.goBack();
                        getApTipo_indicador("")
                    }}
                />
                <View style={styles.container}
                >
                    <Text
                        style={[stylesText.textHeader, { fontSize: 15 }]}
                    >Indicadores</Text>
                    <Text
                        style={[stylesText.textHeader, { fontSize: 13, color: "white" }]}
                    >{nombre}</Text>
                </View>
            </View>
            <View
                style={{
                    backgroundColor: PRIMARY_COLOR
                }}
            >
                <View
                    style={globalStyles.sectionContainerHomeBottom}
                ></View>
            </View>

            <ScrollView>
                <Text style={styles.section} >
                    <Text style={{ fontSize: 30 }} >$ </Text>
                    {valor}</Text>

                <View
                    style={{ alignSelf: "center" }}
                >
                    <View
                        style={styles.sectionTextContainer}
                    >
                        <Text style={styles.TextA} >Nombre</Text>
                        <Text style={[styles.Text, { color: "white" }]}>

                            {(nombre + " ").split(" ").splice(0, 3).join(" ")}
                        </Text>
                    </View>
                    <View
                        style={styles.sectionTextContainer}
                    >
                        <Text style={styles.TextA} >Fecha</Text>
                        <Text style={[styles.Text, { color: "white" }]}>{fecha.split("").splice(0, 10).join("")}</Text>
                    </View>
                    <View
                        style={styles.sectionTextContainer}
                    >
                        <Text style={styles.TextA} >Unidad de Medida</Text>
                        <Text style={[styles.Text, { color: "white" }]}>{unidad_medida}</Text>
                    </View>
                </View>

                <ScrollView
                    horizontal={true}
                >
                    <View style={{ height: 300, padding: 20, flexDirection: 'row', width: 600 }}>
                        <YAxis
                            data={state}
                            style={{ marginBottom: xAxisHeight }}
                            contentInset={verticalContentInset}
                            svg={axesSvg}
                        />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <LineChart
                                style={{ flex: 1 }}
                                data={state}
                                contentInset={verticalContentInset}
                                svg={{ stroke: 'rgb(134, 65, 244)' }}

                            >
                                <Grid />
                            </LineChart>
                            <XAxis
                                style={{ marginHorizontal: -10, height: xAxisHeight }}
                                data={state}
                                formatLabel={
                                    (value: any, index: any) => stateData !== undefined && stateData[value]
                                }

                                contentInset={{ left: 15, right: 10 }}
                                svg={axesSvg}
                            />
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>
            {isLoadingdataIndicatorTipo_indicador
                || serie === undefined
                && <ActivityIndicator size={40} style={globalStyles.loading} />}


        </SafeAreaView>
    )
}

export default Stadistics


const styles = StyleSheet.create({
    container: {
        width: width * 0.8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    sectionContainer: {

    },
    section: {
        color: "white",
        fontSize: 50,
        alignSelf: "center",
        marginBottom: 15
    },
    sectionTextContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width * 0.85,
        height: 52,
        marginHorizontal: 5
    },
    TextA: {
        width: width * 0.4,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        color: "white",
    },
    Text: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "white",
        paddingHorizontal: 10,
        width: width * 0.4,
        height: 25,
        alignSelf: 'center'
    }
})