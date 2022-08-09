import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ItemPreview from "../screens/ItemPreview";
import Barcode from "../screens/Barcode";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen
                name="ItemPreview"
                component={ItemPreview}
                initialParams={{ inputPV: "" }}
            ></Stack.Screen>
            <Stack.Screen name="BarCode" component={Barcode}></Stack.Screen>
        </Stack.Navigator>
    );
}
