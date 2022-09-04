import { NavigationContainer } from "@react-navigation/native";
import { ApiObject } from "../types";
import StackRoutes from "./stack.routes";

export default function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
}

interface HomeLoadProducts {
    loadProducts: Boolean;
    pv: string;
}

export interface ItemPreviewProps {
    itemsPV: ApiObject[];
    inputPV: string;
}

export interface HomeProps {
    payload: undefined | HomeLoadProducts;
}

export interface BarCodeProps {
    itemPV: ApiObject;
    inputPV: string;
}

export type RootStackParamList = {
    Home: HomeProps;
    ItemPreview: ItemPreviewProps;
    BarCode: BarCodeProps;
};
