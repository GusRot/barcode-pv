import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList, ItemPreviewProps } from "../../routes";
import { ApiObject, AsyncData } from "../../types";
import { ContainerScroll } from "../../global/styles/theme";
import Header from "../../components/Header";
import Card from "./Card";
interface RouteProps {
    route: RouteProp<{ params: ItemPreviewProps }, "params">;
}

export default function ItemPreview({ route }: RouteProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { inputPV, itemsPV } = route.params;
    const [lastPv, setLastPv] = useState("");
    const [lastPvQtd, setLastPvQtd] = useState(0);
    const storagePVKey = "@barcodepv:pvItem";

    useEffect(() => {
        getLastPV;
    }, []);

    useFocusEffect(
        useCallback(() => {
            getLastPV();
        }, [])
    );

    async function getLastPV() {
        try {
            const response = await AsyncStorage.getItem(storagePVKey);
            const lastPVBiped = response
                ? (JSON.parse(response) as AsyncData)
                : ({} as AsyncData);
            setLastPv(lastPVBiped.Item + lastPVBiped.Produto);
            setLastPvQtd;
        } catch (error) {
            console.log(error);
        }
    }

    function handleBarCode(item: ApiObject) {
        navigation.navigate("BarCode", { itemPV: item, inputPV });
    }

    return (
        <>
            <Header
                title={`PV: (${inputPV})`}
                description="Selecione um Item"
            />
            <ContainerScroll>
                {itemsPV.map((item) => (
                    <Card
                        key={item.CODIGO}
                        lastPvProps={
                            lastPv === item.ITEM + item.CODIGO ? true : false
                        }
                        onPress={() => handleBarCode(item)}
                        data={item}
                    />
                ))}
            </ContainerScroll>
        </>
    );
}
