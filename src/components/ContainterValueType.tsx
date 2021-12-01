import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { BACKGROUND_COLOR, PRIMARY_COLOR } from '../theme/colors'

const { width } = Dimensions.get("window")

const ContainterValueType = (props: any) => {

    const { fecha, valor } = props.data.item || {}
    return (
        <View style={styles.container}>
            <View
                style={styles.containerText}
            >
                <Text style={{ color: "#B2ADC3", fontSize: 15 }} > {fecha.split("").splice(0, 10).join("")}</Text>
                <Text style={{ color: "gray", fontSize: 14, paddingLeft: 5 }} >
                    $ {valor.toString().split("").splice(0, 2).join("") + "," + valor.toString().split("").splice(2).join("")}
                </Text>
            </View>
        </View>
    )
}

export default ContainterValueType


const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        width: width,
        height: 80,
        padding: 10,
        marginVertical: 4,
        backgroundColor: BACKGROUND_COLOR,
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: PRIMARY_COLOR
    },
    containerText: {
        display: 'flex',
        width: width * 0.7,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",

    },
    containerIcons: {
        display: 'flex',
        flexDirection: 'row',
        width: width * 0.19,
        justifyContent: "flex-end",
        height: "100%",
        alignItems: "center",
    }
})