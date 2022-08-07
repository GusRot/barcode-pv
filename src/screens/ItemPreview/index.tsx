import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../components/Header";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList, ItemPreviewProps } from "../../routes";
import { testObject, testArrayObject } from "../../types";
import Card from "./Card";
import { ContainerScroll } from "../../global/styles/theme";

type TestObject = typeof testObject;
interface RouteProps {
    route: RouteProp<{ params: ItemPreviewProps }, "params">;
}

export default function ItemPreview({ route }: RouteProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { inputPV } = route.params;

    function handleBarCode(item: TestObject) {
        navigation.navigate("BarCode", { itemPV: item });
    }

    return (
        <>
            <Header
                title={`Itens Encontrados: (${inputPV})`}
                description="Selecione uma opção para bipar"
            />
            <ContainerScroll>
                {testArrayObject.map((item) => (
                    <Card onPress={() => handleBarCode(item)} data={item} />
                ))}
            </ContainerScroll>
        </>
    );
}
