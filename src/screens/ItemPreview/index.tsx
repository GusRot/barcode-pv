import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../components/Header";
import { RootStackParamList } from "../../routes";
import { ApiObject } from "../../types";
import Card from "./Card";
import { ContainerScroll } from "../../global/styles/theme";

export default function ItemPreview() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const test: ApiObject = {
        id: "1",
        product: "PA001",
        qtd: 300,
        scannedQtd: 0,
        description: "Produto 1 leve ou pesado",
    };

    function handleBarCode() {
        navigation.navigate("Home");
    }

    return (
        <>
            <Header
                title="Itens Encontrados:"
                description="Selecione uma opção para bipar"
            />
            <ContainerScroll>
                <Card onPress={handleBarCode} data={test} />
                <Card onPress={handleBarCode} data={test} />
                <Card onPress={handleBarCode} data={test} />
                <Card onPress={handleBarCode} data={test} />
            </ContainerScroll>
        </>
    );
}
