import { NavigationContainer } from "@react-navigation/native";
import { ApiObject, ApiReadObject } from "../types";
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

interface ApiItem {
    inputPV: string;
    client: string;
}

interface ApiItems extends ApiItem {
    itemsPV: ApiObject[];
}

export interface ApiReadItem {
    inputPV: string;
    itemsPV: ApiReadObject[];
}

export interface ItemPreviewProps extends ApiItems {}

export interface ItemsCollectedProps extends ApiItems {}

export interface PVItemProps {
    payload: undefined | PVItemLoadProducts;
}

export interface BarCodeProps extends ApiItem {
    itemPV: ApiObject;
}

export type RootStackParamList = {
    PVItem: PVItemProps;
    ItemPreview: ItemPreviewProps;
    ItemsCollected: ApiReadItem;
    BarCode: BarCodeProps;
};
