import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Dimensions, Text, SafeAreaView, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import { DataContext, Props } from '../context/contextAPi'
import { PRIMARY_COLOR } from '../theme/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles, stylesText } from '../theme/appTheme';
import ContainterValueType from '../components/ContainterValueType';



const { width } = Dimensions.get("window")

function SpecificIndicators({ route, navigation }: any) {

    const { codigo } = route.params || {}

    const {
        dataTipo_indicador,
        isLoadingdataIndicatorTipo_indicador,
        getApTipo_indicador
    }: Props = useContext(DataContext) || {}

    const { nombre, serie }: any = dataTipo_indicador || {}

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
            <FlatList
                data={serie}
                renderItem={(item: any) => <ContainterValueType data={item} />}
                keyExtractor={(item: any) => item.fecha}
            />
            {isLoadingdataIndicatorTipo_indicador || serie === undefined
                && <ActivityIndicator size={40} style={globalStyles.loading} />}

        </SafeAreaView>
    )
}

export default SpecificIndicators


const styles = StyleSheet.create({
    container: {
        width: width * 0.8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})