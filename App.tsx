import React, { useCallback, useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_300Light,
} from "@expo-google-fonts/roboto";

import { ThemeProvider } from "styled-components";
import { theme } from "./src/global/styles/theme";
import Routes from "./src/routes";
import { View } from "./src/screens/Home/style";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        Roboto_300Light,
    });

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync(Entypo.font);
            } catch (e) {
                console.warn(e);
            } finally {
                if (fontsLoaded) {
                    setAppIsReady(true);
                }
            }
        }

        prepare();
    }, [fontsLoaded]);

    const onLayoutRootView = useCallback(async () => {
        if (!appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (appIsReady) {
        return (
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        );
    }

    return (
        <View
            onLayout={onLayoutRootView}
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Entypo name="rocket" size={70} />
        </View>
    );
}
