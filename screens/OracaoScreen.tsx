import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function OracaoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PEDIDOS DE ORAÇÃO</Text>
            <View style={styles.separator} lightColor="#000" darkColor="#eee" />
            {/* <EditScreenInfo path="/screens/TabTwoScreen.js" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
