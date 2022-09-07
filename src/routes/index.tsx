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

interface PVItemLoadProducts {
    loadProducts: Boolean;
    pv: string;
}

export interface ItemPreviewProps {
    itemsPV: ApiObject[];
    inputPV: string;
}

export interface ItemsCollectedProps {
    itemsPV: ApiObject[];
    inputPV: string;
}

export interface PVItemProps {
    payload: undefined | PVItemLoadProducts;
}

export interface BarCodeProps {
    itemPV: ApiObject;
    inputPV: string;
}

export type RootStackParamList = {
    PVItem: PVItemProps;
    ItemPreview: ItemPreviewProps;
    BarCode: BarCodeProps;
};
