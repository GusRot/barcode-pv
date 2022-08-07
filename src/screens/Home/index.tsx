import { View, Container, InputContainer } from "./style";
import { theme } from "../../global/styles/theme";
import Header from "../../components/Header";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes";
import { ApiObject } from "../../types";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Home() {
    const [pv, setPv] = useState("");
    const [itemOptions, setItemOptions] = useState<ApiObject[]>([]);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    function handleItemPV() {
        navigation.navigate("ItemPreview", {
            itemsPV: [],
            inputPV: pv,
        });
    }

    async function loadProducts() {
        try {
            await api
                .get(`/products${pv}`)
                .then((response) => setItemOptions(response.data));
            console.log(itemOptions);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        // loadProducts();
    }, []);

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
                    />
                    </InputContainer>
            </View>

            <Button title="CONFIRMAR" onPress={handleItemPV} />
        </Container>
    );
}
