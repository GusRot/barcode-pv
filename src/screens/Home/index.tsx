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
    const [responsePv, setResponsePv] = useState("");
    const [itemOptions, setItemOptions] = useState<ApiObject[]>([]);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    async function handleItemPV() {
        const valuePV = pv;
        setPv("");
        await loadProducts(valuePV);
    }

    useEffect(() => {
        if (itemOptions.length && responsePv) {
            navigation.navigate("ItemPreview", {
                itemsPV: itemOptions,
                inputPV: responsePv,
            });
        }
    }, [itemOptions, responsePv]);

    async function loadProducts(item: string) {
        const token =
            "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6InRvdHZzIiwiaWF0IjoxNjYwNjgyMDY1LCJ1c2VyaWQiOiIwMDAwMDkiLCJleHAiOjE2NjA2ODU2NjUsImVudklkIjoiQ1lUMEJTXzEzNzU4MF9QUl9EViJ9.bwBxete6RmB0PWKuaopY8_hJIsnenZdlOmHnRmYYr1VRhQ9Xp1RfscCXxc_CbBItirLe6LSeOYWE13vpgJ6BBzwexo1uQa_W16yRFzqOgXR-1UPFnouMEGFFSILEQOyPlzqdauXI114U_GVYaIC0g0R8g15pW0vwaPkT-xvCxu76axItlROSqTJySpkO4An4RSzbScWvpVHUnatQbom-PeienYIyAifUYtrzsYRn5OOR1IaNtOzAGIBOBrw2-p7xVKtvdB_ECVw1d7dxEDkUdu2v7WGU4RAw1WOEI7CCRLcgVzLp-TVG8TGFLR_AN87m0MbPv3r01juPMoYdSuvGrg";

        try {
            const password = "123456";
            const username = "totvs";
            await api
                .post(
                    `/oauth2/v1/token?grant_type=password&password=${password}&username=${username}`
                )
                .then((response) => {
                    const Bearer = response.data.access_token;
                });
        } catch (error) {
            console.error(error);
        }

        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };

            await api
                .post(`/retail/v1/AWSITPV`, { Pedido: item }, config)
                .then((response) => {
                    setItemOptions(response.data.Ret[0].itens);
                    setResponsePv(response.data.Ret[0].pedido);
                });
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
