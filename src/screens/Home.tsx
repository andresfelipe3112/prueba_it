import React, { useContext, } from 'react'
import { View, Text, ScrollView, Dimensions, SafeAreaView, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ItemIndicadores from '../components/ItemIndicadores';
import { DataContext } from '../context/contextAPi';
import { getApi } from '../intefaces/interfaces';
import { globalStyles, stylesText } from '../theme/appTheme';
import { PRIMARY_COLOR } from '../theme/colors';


interface Props {
    dataIndicator?: getApi;
    isLoadingdataIndicator?: boolean
}


function Home() {

    const { width } = Dimensions.get("window")
    const { dataIndicator, isLoadingdataIndicator }: Props = useContext(DataContext) || {}

    return (
        <SafeAreaView style={[{ flex: 1 }, globalStyles.container]}>
            <ScrollView >
                <View
                    style={globalStyles.sectionContainerHome}
                >
                    <Icon name="menu-outline" size={40} color={"#CAC9CA"} />
                    <View style={{ width: width * 0.77 }}
                    >
                        <Text
                            style={stylesText.textHeader}
                        >Indicadores</Text>
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
                <ItemIndicadores data={dataIndicator} />
                {isLoadingdataIndicator ? <ActivityIndicator size={40} style={globalStyles.loading} /> : null}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
