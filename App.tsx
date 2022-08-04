import Home from "./src/screens/Home";
import AppLoading from "expo-app-loading";
import {
    useFonts,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_300Light,
} from "@expo-google-fonts/roboto";

export default function App() {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
        Roboto_300Light,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return <Home />;
}
