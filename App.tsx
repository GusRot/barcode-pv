import React, { useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
    useFonts,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { ThemeProvider } from "styled-components";
import { theme } from "./src/global/styles/theme";
import Routes from "./src/routes";
import Splash from "./src/components/Splash";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    let [fontsLoaded] = useFonts({
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_700Bold,
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

    if (appIsReady) {
        return (
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        );
    }

    return <Splash appIsReady={appIsReady} />;
}
