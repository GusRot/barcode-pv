import { NavigationContainer, useNavigation } from "@react-navigation/native";
import StackRoutes from "./stack.routes";

interface RoutesInterface {
    key: string; 
    params?: undefined; 
    merge?: boolean | undefined; 
}

export default function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
}

export function RoutesNavigation(route: RoutesInterface) {
    const navigation = useNavigation();

    navigation.navigate(route);
}
