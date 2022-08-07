import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
    ContainerButton,
    ContainerText,
    ContainerView,
} from "../../../global/styles/theme";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BarCodeProps, RootStackParamList } from "../../../routes";

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
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const itemPV = route.params;

    function handleBarCode() {
        setScanned(false);
        navigation.navigate("Home", { payload: undefined });
    }

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
            console.log(itemPV);
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
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && (
                <ContainerButton
                    title={"Tap to Scan Again"}
                    onPress={handleBarCode}
                />
            )}
        </ContainerView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
});
