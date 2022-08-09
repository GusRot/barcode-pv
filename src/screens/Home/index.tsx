import { View, Container, InputContainer } from "./style";
import { theme } from "../../global/styles/theme";
import Header from "../../components/Header";
import { api } from "../../services/api";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes";
import { ApiObject, testArrayObject } from "../../types";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Home() {
    const [pv, setPv] = useState("");
    const [itemOptions, setItemOptions] = useState<ApiObject[]>([]);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    function handleItemPV() {
        const valuePV = pv;
        // loadProducts(valuePV);
        setPv("");
        navigation.navigate("ItemPreview", {
            itemsPV: testArrayObject,
            inputPV: valuePV,
        });
    }

    async function loadProducts(item: string) {
        try {
            await api
                .post(`/products`, { pedido: item })
                .then((response) => setItemOptions(response.data));
            console.log(itemOptions);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Container>
            <View>
                <Header title="Informe o numero do PV" />
                <InputContainer>
                    <Input
                        placeholder="Pedido de Venda:"
                        placeholderTextColor={theme.colors.text}
                        autoCorrect={false}
                        onChangeText={setPv}
                        value={pv}
                    />
                </InputContainer>
            </View>

            <Button title="CONFIRMAR" onPress={handleItemPV} />
        </Container>
    );
}
