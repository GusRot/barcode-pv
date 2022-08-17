import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes";
import { ApiObject } from "../../types";
import { api } from "../../services/api";
import { theme } from "../../global/styles/theme";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { View, Container, InputContainer } from "./style";
import { Alert } from "react-native";
import Splash from "../../components/Splash";

export default function Home() {
    const [appIsReady, setAppIsReady] = useState(true);
    const [pv, setPv] = useState("");
    const [responsePv, setResponsePv] = useState("");
    const [itemOptions, setItemOptions] = useState<ApiObject[]>([]);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const storageAuthKey = "@barcodepv:auth";
    const { REACT_APP_PASSWORD } = process.env;
    const { REACT_APP_USERNAME } = process.env;

    async function handleItemPV() {
        setAppIsReady(false);
        const valuePV = pv;
        setPv("");
        await checkAuth();
        await loadProducts(valuePV);
        setAppIsReady(true);
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
        const { token } = await checkAuth();
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
            console.error("loadProducts", err);
            setItemOptions([]);
            Alert.alert("Pedido de venda incorreto");
        }
    }

    async function checkAuth() {
        const response = await AsyncStorage.getItem(storageAuthKey);
        const authToken = response ? JSON.parse(response) : false;

        if (authToken) {
            return authToken;
        }

        if (!authToken) {
            const token = await authentication();
            return token;
        }
    }

    async function authentication() {
        try {
            return await api
                .post(
                    `/oauth2/v1/token?grant_type=password&password=${REACT_APP_PASSWORD}&username=${REACT_APP_USERNAME}`
                )
                .then((response) => {
                    const tokenCreate = {
                        token: response.data.access_token,
                        time: response.data.expires_in,
                        refresh: response.data.refresh_token,
                        data: new Date(),
                    };

                    AsyncStorage.setItem(
                        storageAuthKey,
                        JSON.stringify(tokenCreate)
                    );

                    return tokenCreate;
                });
        } catch (error) {
            console.error("authentication", error);
        }
    }

    if (appIsReady)
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

    return <Splash appIsReady={appIsReady} />;
}
