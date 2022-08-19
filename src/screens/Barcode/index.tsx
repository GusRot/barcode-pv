import React, { useState, useEffect } from "react";
import {
    Alert,
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { ContainerView } from "../../global/styles/theme";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BarCodeProps, RootStackParamList } from "../../routes";
import {
    BarCodeContainer,
    BarCodeEnableContainer,
    SubmitContainer,
} from "./styles";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { api } from "../../services/api";
import SuccessScam from "./SuccessScam";
import QtdInput from "./QtdInput";
import ErrorScreen from "../../components/ErrorScreen";

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
    const [openCodeReader, setOpenCodeReader] = useState(false);
    const [userHandleCam, setUserHandleCam] = useState(false);

    function handleBarCode() {
        setScanned(false);
    }

    function handleQtdUpdate() {
        if (inputQtd) {
            const inputQtdFormatted = String(inputQtd)
                .replace(",", ".")
                .replace(/[^0-9.]/g, "");

            if (!inputQtdFormatted) {
                Alert.alert("Quantidade invalida");
                setInputQtd(undefined);
                return;
            }

            const newQtdRead = parseFloat(inputQtdFormatted) + Number(qtdRead);
            setQtdRead(newQtdRead);
            setInputQtd(undefined);
            Alert.alert("Quantidade adicionada");
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

    function handleBarCodeEnable() {
        setUserHandleCam(true);
    }

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getBarCodeScannerPermissions();
    }, []);

    useEffect(() => {
        setOpenCodeReader(
            !scanned && hasPermission && userHandleCam ? hasPermission : false
        );
    }, [scanned, hasPermission, userHandleCam]);

    const handleBarCodeScanned = ({ type, data }: CodeScanned) => {
        setScanned(true);
        setQtdRead(Number(inputQtd) + 3);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null && userHandleCam) {
        return <ErrorScreen title="Requesting for camera permission" />;
    }
    if (hasPermission === false && userHandleCam) {
        return <ErrorScreen title="No access to camera" />;
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ContainerView style={styles.container}>
                <Header
                    title={`QTD Lida: ${String(qtdRead).replace(".", ",")} kg`}
                    description={`Escaneie o QR Code ou digite a quantidade (produto: ${itemPV.ITEM})`}
                />
                {!userHandleCam && !scanned && (
                    <BarCodeEnableContainer>
                        <Button
                            title={"Habilitar leitura"}
                            onPress={handleBarCodeEnable}
                        />
                    </BarCodeEnableContainer>
                )}
                {openCodeReader && (
                    <>
                        <BarCodeContainer>
                            <BarCodeScanner
                                onBarCodeScanned={
                                    scanned ? undefined : handleBarCodeScanned
                                }
                                style={StyleSheet.absoluteFillObject}
                            />
                        </BarCodeContainer>
                    </>
                )}
                {scanned ? (
                    <SuccessScam handleBarCode={handleBarCode} />
                ) : (
                    <QtdInput
                        handleQtdUpdate={handleQtdUpdate}
                        setInputQtd={setInputQtd}
                        inputQtd={inputQtd}
                    />
                )}
                <SubmitContainer>
                    <Button title={"Enviar"} onPress={handleBarCodeSubmit} />
                </SubmitContainer>
            </ContainerView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
