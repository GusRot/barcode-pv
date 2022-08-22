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
import Splash from "../../components/Splash";

interface CodeScanned {
    type: string;
    data: string;
}

interface SubmitScan {
    id: string;
    Pedido: string;
    Item: string;
    Produto: string;
    Peso: number;
}

interface RouteProps {
    route: RouteProp<{ params: BarCodeProps }, "params">;
}

export default function Barcode({ route }: RouteProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { itemPV, inputPV } = route.params;
    const [hasPermission, setHasPermission] = useState<boolean>();
    const [appIsReady, setAppIsReady] = useState(true);
    const [scanned, setScanned] = useState(false);
    const [openCodeReader, setOpenCodeReader] = useState(false);
    const [userHandleCam, setUserHandleCam] = useState(false);
    const [userHandleInput, setUserHandleInput] = useState(false);
    const [qtdRead, setQtdRead] = useState(0);
    const [inputQtd, setInputQtd] = useState("");

    function handleBarCode() {
        setScanned(false);
    }

    const handleBarCodeScanned = ({ type, data }: CodeScanned) => {
        setScanned(true);
        setInputQtd("");
        setQtdRead(Number(data) + qtdRead);
        alert(`Quantidade ${data} foi lida!`);
        handleQtdUpdate();
    };

    async function handleQtdUpdate() {
        if (inputQtd) {
            const inputQtdFormatted = inputQtd.replace(",", ".");

            if (!inputQtdFormatted) {
                Alert.alert("Quantidade invalida");
                setInputQtd("");
                return;
            }

            const newQtdRead = parseFloat(inputQtdFormatted) + Number(qtdRead);
            setQtdRead(newQtdRead);
            setInputQtd("");
            await barCodeSubmit(Number(inputQtdFormatted));
            return;
        }
        await barCodeSubmit(qtdRead);
    }

    function barCodeSubmit(qtdRead: number) {
        const submitObject = {
            id: "COLETA",
            Pedido: inputPV,
            Item: itemPV.ITEM,
            Produto: itemPV.CODIGO,
            Peso: qtdRead,
        };

        sendProducts(submitObject);
    }

    async function sendProducts(submitObject: SubmitScan) {
        setAppIsReady(false);
        try {
            await api.post(`/retail/v1/AWSITPV`, submitObject);
            Alert.alert("Quantidade adicionada");
        } catch (err) {
            console.error(err);
        } finally {
            console.log("send", submitObject);

            setAppIsReady(true);
        }
    }

    function handleBarCodeEnable() {
        setUserHandleCam(true);
    }

    function handleInputEnable() {
        setUserHandleInput(true);
    }

    function handleFinishPV() {
        navigation.navigate("Home", { payload: undefined });
    }

    const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
    };

    useEffect(() => {
        getBarCodeScannerPermissions();
    }, []);

    useEffect(() => {
        setOpenCodeReader(
            !scanned && hasPermission && userHandleCam ? hasPermission : false
        );
    }, [scanned, hasPermission, userHandleCam]);

    if (hasPermission === null && userHandleCam) {
        return (
            <ErrorScreen
                enablePermission={getBarCodeScannerPermissions}
                title="Permissão da camera pendente"
            />
        );
    }
    if (hasPermission === false && userHandleCam) {
        return (
            <ErrorScreen
                enablePermission={getBarCodeScannerPermissions}
                title="Sem acesso a camera"
            />
        );
    }

    if (!appIsReady) {
        return <Splash appIsReady={appIsReady} />;
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ContainerView style={styles.container}>
                <Header
                    title={`QTD Lida: ${String(qtdRead).replace(".", ",")} kg`}
                    description={`${"\n"}(produto: ${
                        itemPV.CODIGO
                    })${"\n"}(Pedido: ${inputPV})${"\n"}(Item: ${itemPV.ITEM})`}
                    fixed={false}
                />
                {!userHandleCam && !scanned && (
                    <BarCodeEnableContainer>
                        <Button
                            title={"Habilitar leitura"}
                            primary={false}
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
                ) : userHandleInput ? (
                    <QtdInput
                        handleQtdUpdate={handleQtdUpdate}
                        setInputQtd={setInputQtd}
                        inputQtd={inputQtd}
                    />
                ) : (
                    <Button
                        title={"Habilitar Input QTD"}
                        primary={false}
                        onPress={handleInputEnable}
                    />
                )}
                <SubmitContainer>
                    <Button
                        title={"Finalizar"}
                        onPress={handleFinishPV}
                        enabled={!!qtdRead}
                    />
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
