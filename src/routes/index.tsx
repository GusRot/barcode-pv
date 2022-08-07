import { NavigationContainer } from "@react-navigation/native";
import { ApiObject, ApiObjectScanned } from "../types";
import StackRoutes from "./stack.routes";

export default function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
}

export interface ItemPreviewProps {
    itemsPV: Array<string | null>;
    inputPV: string;
}

export interface HomeProps {
    payload: undefined | ApiObjectScanned;
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
