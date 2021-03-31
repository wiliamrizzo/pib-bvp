import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function HomeScreen() {
    return (
        <View
            style={styles.container}
            lightColor="rgba(255,255,255,0.1)"
            darkColor="#eeeccc">
            {/* <ScrollView> */}
            <Image
                style={styles.image}
                source={require("../assets/images/logo-pib.jpg")}
            />
            {/* </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        borderWidth: 1,
        borderRadius: 150,
        height: 300,
        width: 300,
        resizeMode: "contain",
        backgroundColor: "transparent",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
