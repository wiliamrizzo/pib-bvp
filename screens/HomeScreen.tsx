import * as React from "react";
import { StyleSheet, Image } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={require("../assets/images/logo-pib.jpg")}
                />
                {/* <Text style={styles.title}>Primeira Igreja Batista em Bela Vista do Paraíso</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.js" /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        //flex: 1,
        //width: "100%",
        borderWidth: 11,
        borderRadius: 400,
        height: 400,
        resizeMode: "contain",
        //backgroundColor: '#fff'
    },
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
        height: 2,
        width: "80%",
    },
});
