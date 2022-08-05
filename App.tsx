import { ThemeProvider } from "styled-components";
import { theme } from "./src/global/styles/theme";
import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_300Light,
} from "@expo-google-fonts/roboto";
import Routes from "./src/routes";

export default function App() {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        Roboto_300Light,
    });

    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
}
