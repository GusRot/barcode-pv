import { useCallback } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";

import { ContainerView } from "../../global/styles/theme";

export default function Splash({ appIsReady }: { appIsReady: boolean }) {
    const onLayoutRootView = useCallback(async () => {
        if (!appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    return (
        <ContainerView
            onLayout={onLayoutRootView}
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Entypo name="rocket" size={70} />
        </ContainerView>
    );
}
