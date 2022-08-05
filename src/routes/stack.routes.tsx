import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="text" component={Home}></Stack.Screen>
            <Stack.Screen name="teste" component={Home}></Stack.Screen>
        </Stack.Navigator>
    );
}
