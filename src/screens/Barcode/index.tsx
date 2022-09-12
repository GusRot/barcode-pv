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
    TextError,
} from "./style";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { api } from "../../services/api";
import SuccessScam from "./SuccessScam";
import QtdInput from "./QtdInput";
import ErrorScreen from "../../components/ErrorScreen";
import Splash from "../../components/Splash";
import { SubmitScan } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CodeScanned {
    type: string;
    data: string;
}

interface RouteProps {
    route: RouteProp<{ params: BarCodeProps }, "params">;
}

export default function Barcode({ route }: RouteProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { itemPV, inputPV, client } = route.params;
    const [hasPermission, setHasPermission] = useState<boolean>();
    const [appIsReady, setAppIsReady] = useState(true);
    const [scanned, setScanned] = useState(false);
    const [openCodeReader, setOpenCodeReader] = useState(false);
    const [userHandleCam, setUserHandleCam] = useState(false);
    const [userHandleInput, setUserHandleInput] = useState(false);
    const [errorQtd, setErrorQtd] = useState(false);
    const [qtdRead, setQtdRead] = useState(0);
    const [lastQtd, setLastQtd] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [inputQtd, setInputQtd] = useState("");
    const storagePVKey = "@barcodepv:pvItem";

    function handleBarCode() {
        setScanned(false);
    }

    const handleBarCodeScanned = ({ type, data }: CodeScanned) => {
        const newData = String(data).replace(",", ".");
        if (!data || Number.isNaN(Number(newData)) || Number(newData) > 100) {
            setErrorMessage(`Quantidade ${data} invalida`);
            setErrorQtd(true);
            setLastQtd(0);
            return;
        }

        setScanned(true);
        setErrorQtd(false);
        setErrorMessage("");
        setInputQtd("");
        setLastQtd(Number(newData));
        setQtdRead(Number(newData) + qtdRead);
        barCodeSubmit(Number(newData));
    };

    function handleQtdUpdate() {
        if (!inputQtd) {
            Alert.alert("Quantidade invalida, preencha o campo");
            setLastQtd(0);
            setInputQtd("");
            return;
        }
        const inputQtdFormatted = inputQtd.replace(",", ".");

        if (!inputQtdFormatted || inputQtdFormatted === ".") {
            Alert.alert("Quantidade invalida, Deve ser um número");
            setLastQtd(0);
            setInputQtd("");
            return;
        }

        setLastQtd(parseFloat(inputQtdFormatted));
        setInputQtd("");
        setErrorQtd(false);
        setErrorMessage("");
        barCodeSubmit(parseFloat(inputQtdFormatted));
    }

    function barCodeSubmit(newQtdRead: number) {
        const submitObject = {
            id: "COLETA",
            Pedido: inputPV,
            Item: itemPV.ITEM,
            Produto: itemPV.CODIGO,
            Peso: newQtdRead,
            Modo: scanned,
        };

        sendProducts(submitObject);
    }

    async function sendProducts(submitObject: SubmitScan) {
        setAppIsReady(false);
        try {
            await api.post(`/retail/v1/AWSITPV`, submitObject);
            const newQtdRead = submitObject.Peso + Number(qtdRead);
            setQtdRead(newQtdRead);
            Alert.alert(`Quantidade ${submitObject.Peso} adicionada`);
            await storeData(submitObject);
        } catch (err) {
            console.error(err);
            Alert.alert("Não foi possível adicionar ao Protheus");
        } finally {
            console.log("send", submitObject);

            setAppIsReady(true);
        }
    }

    async function storeData(submitObject: SubmitScan) {
        const totalQtd = { ...submitObject, total: qtdRead };
        try {
            AsyncStorage.setItem(storagePVKey, JSON.stringify(totalQtd));
        } catch (error) {
            console.error(error);
        }
    }

    function handleBarCodeEnable() {
        setUserHandleCam(true);
    }

    function handleInputEnable() {
        setUserHandleInput(true);
    }

    function handleFinishPV() {
        navigation.navigate("PVItem", {
            payload: { loadProducts: true, pv: inputPV },
        });
    }

    function handleLastTransaction() {}

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
                    title={`QTD Lida: ${String(lastQtd).replace(".", ",")} kg`}
                    description={`${client}${"\n"}${"descriçao simples"}${"\n"}Item/Pedido: ${
                        itemPV.ITEM + "/" + inputPV
                    }`}
                    fixed={false}
                />
                {!userHandleCam && !scanned && (
                    <BarCodeEnableContainer>
                        <Button
                            title={"Habilitar Leitura"}
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
                                style={styles.container}
                            />
                            {errorQtd && <TextError>{errorMessage}</TextError>}
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
                        title={"Habilitar Input"}
                        primary={false}
                        onPress={handleInputEnable}
                    />
                )}
                <SubmitContainer>
                    <Button
                        title={"Voltar"}
                        onPress={handleFinishPV}
                        enabled={!!qtdRead}
                        two={true}
                    />

                    <Button
                        title={String.fromCharCode(10226)}
                        onPress={handleLastTransaction}
                        enabled={!!lastQtd}
                        disabled={!lastQtd}
                        two={true}
                        icon={true}
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
