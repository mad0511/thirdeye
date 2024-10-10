import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type LoginScreenProps = {
    route: RouteProp<MainStackParamList, "Login">,
    navigation: FrameNavigationProp<MainStackParamList, "Login">,
};

export function LoginScreen({ navigation }: LoginScreenProps) {
    const [isLogin, setIsLogin] = React.useState(true);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = () => {
        // Here you would typically handle the login/signup logic
        console.log(`${isLogin ? "Logging in" : "Signing up"} with:`, { username, password });
        // For demo purposes, we'll just navigate to the Home screen
        navigation.navigate("Home");
    };

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-3xl font-bold mb-8 text-center">
                {isLogin ? "Login" : "Sign Up"}
            </label>
            <textField
                style={styles.input}
                hint="Username"
                value={username}
                onTextChange={(e) => setUsername(e.value)}
            />
            <textField
                style={styles.input}
                hint="Password"
                secure={true}
                value={password}
                onTextChange={(e) => setPassword(e.value)}
            />
            <button
                style={styles.button}
                onTap={handleSubmit}
            >
                {isLogin ? "Login" : "Sign Up"}
            </button>
            <button
                style={styles.switchButton}
                onTap={() => setIsLogin(!isLogin)}
            >
                {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
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
        padding: 20,
    },
    input: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
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
    switchButton: {
        fontSize: 16,
        color: "#2e6ddf",
        marginTop: 20,
    },
});