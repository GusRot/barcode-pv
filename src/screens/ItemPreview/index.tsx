import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList, ItemPreviewProps } from "../../routes";
import { ApiObject } from "../../types";
import { ContainerScroll } from "../../global/styles/theme";
import Header from "../../components/Header";
import Card from "./Card";
interface RouteProps {
    route: RouteProp<{ params: ItemPreviewProps }, "params">;
}

export default function ItemPreview({ route }: RouteProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { inputPV, itemsPV } = route.params;
    console.log(itemsPV);

    function handleBarCode(item: ApiObject) {
        navigation.navigate("BarCode", { itemPV: item, inputPV });
    }

    return (
        <>
            <Header
                title={`Item: (${inputPV})`}
                description="Selecione um produto"
            />
            <ContainerScroll>
                {itemsPV.map((item) => (
                    <Card
                        key={item.CODIGO}
                        onPress={() => handleBarCode(item)}
                        data={item}
                    />
                ))}
            </ContainerScroll>
        </>
    );
}
