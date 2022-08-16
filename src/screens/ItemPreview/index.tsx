import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../components/Header";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList, ItemPreviewProps } from "../../routes";
import { testObject } from "../../types";
import Card from "./Card";
import { ContainerScroll } from "../../global/styles/theme";

type TestObject = typeof testObject;
interface RouteProps {
    route: RouteProp<{ params: ItemPreviewProps }, "params">;
}

export default function ItemPreview({ route }: RouteProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { inputPV, itemsPV } = route.params;
    console.log(itemsPV);

    function handleBarCode(item: TestObject) {
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
