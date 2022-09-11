import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Modal } from "react-native";
import { RootStackParamList, ItemPreviewProps } from "../../routes";
import { ApiObject, AsyncData } from "../../types";
import { ContainerScroll, ContainerView } from "../../global/styles/theme";
import Header from "../../components/Header";
import Card from "./Card";
import BackButton from "../../components/BackButton";
import { Icon, ListOptions } from "./style";
import OptionsModal from "../../components/OptionsModal";
interface RouteProps {
    route: RouteProp<{ params: ItemPreviewProps }, "params">;
}

type ModeOptions = "readonly" | "standard" | "romaneio";

export default function ItemPreview({ route }: RouteProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { inputPV, itemsPV, client } = route.params;
    const [lastPv, setLastPv] = useState("");
    const [modeActive, setModeActive] = useState<ModeOptions>("standard");
    const [modal, setModal] = useState(false);
    const storagePVKey = "@barcodepv:pvItem";

    useEffect(() => {
        getLastPV;
    }, []);

    useFocusEffect(
        useCallback(() => {
            getLastPV();
        }, [])
    );

    function handleModalOpen(option: ModeOptions) {
        setModeActive(option);
        setModal(!modal);
    }

    async function getLastPV() {
        try {
            const response = await AsyncStorage.getItem(storagePVKey);
            const lastPVBiped = response
                ? (JSON.parse(response) as AsyncData)
                : ({} as AsyncData);
            setLastPv(lastPVBiped.Item + lastPVBiped.Produto);
        } catch (error) {
            console.log(error);
        }
    }

    function handleBarCode(item: ApiObject) {
        navigation.navigate("BarCode", { itemPV: item, inputPV, client });
    }

    function handlePVItemPage() {
        navigation.navigate("PVItem", {
            payload: undefined,
        });
    }

    return (
        <>
            <ContainerView>
                <Header
                    title={`PV: (${inputPV})`}
                    description={`Cliente/Loja: ${client}`}
                />
                <ListOptions onPress={handleModalOpen}>
                    <Icon name="menu" onPress={handleModalOpen} />
                </ListOptions>
                <BackButton onPress={handlePVItemPage} />
            </ContainerView>
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

            <Modal visible={modal}>
                <OptionsModal close={handleModalOpen} modeActive={modeActive} />
            </Modal>
        </>
    );
}
