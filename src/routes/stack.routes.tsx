import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PVItem from "../screens/PVItem";
import ItemPreview from "../screens/ItemPreview";
import Barcode from "../screens/Barcode";
import ItemsCollected from "../screens/ItemsCollected";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="PVItem"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="PVItem" component={PVItem}></Stack.Screen>
            <Stack.Screen
                name="ItemPreview"
                component={ItemPreview}
            ></Stack.Screen>
            <Stack.Screen
                name="ItemsCollected"
                component={ItemsCollected}
            ></Stack.Screen>
            <Stack.Screen name="Login" component={PVItem}></Stack.Screen>
            <Stack.Screen name="BarCode" component={Barcode}></Stack.Screen>
        </Stack.Navigator>
    );
}
