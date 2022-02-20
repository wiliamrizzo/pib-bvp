import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function MaisScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View
                    style={styles.texto}
                    lightColor="#fff"
                    darkColor="#000"
                ></View>
                {/* <Text style={styles.title}>Teste teste teste</Text>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                    <EditScreenInfo path="/screens/TabTwoScreen.js" /> */}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    texto: {
        marginVertical: 30,
        height: 1,
        width: "80%",
        backgroundColor: "blue",
    },
});
