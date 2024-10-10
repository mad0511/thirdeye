import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from "../NavigationParamList";

type ScreenOneProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function ScreenOne({ navigation }: ScreenOneProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-4 font-bold text-center">
                Welcome to the Home Screen!
            </label>
            <button
                style={styles.button}
                onTap={() => Dialogs.alert("Tapped!")}
            >
                Tap me for an alert
            </button>
            <button
                style={styles.button}
                onTap={() => navigation.navigate("Two", { message: "Hello from Home!" })}
            >
                Go to next screen
            </button>
            <button
                style={styles.button}
                onTap={() => navigation.navigate("Login")}
            >
                Logout
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        fontSize: 18,
        color: "#ffffff",
        backgroundColor: "#2e6ddf",
        padding: 10,
        borderRadius: 5,
        width: "80%",
        textAlignment: "center",
        marginTop: 10,
    },
});