import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { ContainerText, ContainerView, theme } from "../../global/styles/theme";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BarCodeProps, RootStackParamList } from "../../routes";
import {
    BarCodeContainer,
    QtdContainer,
    QtdContainerDivider,
    SubmitContainer,
} from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Header from "../../components/Header";
import { api } from "../../services/api";
import SuccessScam from "./SuccessScam";
import QtdInput from "./QtdInput";

interface CodeScanned {
    type: string;
    data: string;
}

interface RouteProps {
    route: RouteProp<{ params: BarCodeProps }, "params">;
}

export default function Barcode({ route }: RouteProps) {
    const [hasPermission, setHasPermission] = useState<boolean>();
    const [scanned, setScanned] = useState(false);
    const [qtdRead, setQtdRead] = useState(0);
    const [inputQtd, setInputQtd] = useState<number>();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { itemPV, inputPV } = route.params;

    function handleBarCode() {
        setScanned(false);
    }

    function handleQtdUpdate() {
        if (inputQtd) {
            setQtdRead(Number(inputQtd) + Number(qtdRead));
            setInputQtd(undefined);
        }
    }

    function handleBarCodeSubmit() {
        setScanned(false);
        const submitObject = {
            Pedido: inputPV,
            Item: itemPV.ITEM,
            CODIGO: itemPV.CODIGO,
            QTDLida: qtdRead,
        };

        console.log(submitObject);
        async function sendProducts() {
            try {
                await api.post(`/products`, submitObject);
            } catch (err) {
                console.error(err);
            }
        }

        navigation.navigate("Home", { payload: undefined });
    }

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }: CodeScanned) => {
        setScanned(true);
        alert(
            `Bar code with type ${type} and data ${data} has been scanned! item:${itemPV}`
        );
    };

    if (hasPermission === null) {
        return <ContainerText>Requesting for camera permission</ContainerText>;
    }
    if (hasPermission === false) {
        return <ContainerText>No access to camera</ContainerText>;
    }

    return (
        <ContainerView style={styles.container}>
            <Header
                title={`QTD Lida: ${qtdRead}`}
                description="Escaneie o QR Code ou digite a quantidade"
            />
            {!scanned && (
                <>
                    <BarCodeContainer>
                        <BarCodeScanner
                            onBarCodeScanned={
                                scanned ? undefined : handleBarCodeScanned
                            }
                            style={StyleSheet.absoluteFillObject}
                        />
                    </BarCodeContainer>
                    <QtdInput
                        handleQtdUpdate={handleQtdUpdate}
                        setInputQtd={setInputQtd}
                        inputQtd={inputQtd}
                    />
                </>
            )}
            {scanned && <SuccessScam handleBarCode={handleBarCode} />}
            <SubmitContainer>
                <Button title={"Enviar"} onPress={handleBarCodeSubmit} />
            </SubmitContainer>
        </ContainerView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
