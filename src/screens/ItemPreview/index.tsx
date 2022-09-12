import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Alert, Modal } from "react-native";
import { RootStackParamList, ItemPreviewProps } from "../../routes";
import { ApiObject, ApiReadObject, AsyncData } from "../../types";
import { ContainerScroll, ContainerView } from "../../global/styles/theme";
import Header from "../../components/Header";
import Card from "./Card";
import BackButton from "../../components/BackButton";
import { Icon, ListOptions } from "./style";
import OptionsModal from "../../components/OptionsModal";
import { api } from "../../services/api";
import Button from "../../components/Button";
interface RouteProps {
    route: RouteProp<{ params: ItemPreviewProps }, "params">;
}

type ModeOptions = "readonly" | "standard" | "romaneio";

export default function ItemPreview({ route }: RouteProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { inputPV, itemsPV, client } = route.params;
    const [lastPv, setLastPv] = useState("");
    const [lastData, setLastData] = useState<ApiObject>({} as ApiObject);
    const [readData, setReadData] = useState<ApiReadObject[]>([
        {} as ApiReadObject,
    ]);
    const [modeActive, setModeActive] = useState<ModeOptions>("standard");
    const [modal, setModal] = useState(false);
    const storagePVKey = "@barcodepv:pvItem";
    const storageAllPVKey = "@barcodepv:pvItems";

    useEffect(() => {
        getLastPV();
    }, []);

    useEffect(() => {
        if (modeActive === "standard") {
            getLastData();
        }

        if (modeActive === "readonly") {
            getReadData();
        }
    }, [modeActive]);

    useFocusEffect(
        useCallback(() => {
            getLastPV();
        }, [])
    );

    function handleModalOpen(option: ModeOptions | null) {
        if (option) {
            setModeActive(option);
        }
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

    async function getReadData() {
        if (!readData[0].CODIGO) {
            loadReadProducts();
        }
    }

    async function loadReadProducts() {
        const token = "await checkAuth()";
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };

            const body = {
                id: "CONSULTA",
                Pedido: inputPV,
            };

            await api
                .post(`/retail/v1/AWSITPV`, body, config)
                .then((response) => {
                    const itens = response.data.Ret[0].itens;
                    setReadData(itens);
                    console.log(itens);
                });
        } catch (err) {
            console.error("loadProducts", err);
            setReadData([]);
        }
    }

    async function getLastData() {
        if (!lastData.CODIGO) {
            try {
                const response = await AsyncStorage.getItem(storageAllPVKey);
                const lastData = response
                    ? (JSON.parse(response) as ApiObject)
                    : ({} as ApiObject);
                setLastData(lastData);
            } catch (error) {
                console.log(error);
            }
        }
    }

    function handleBarCode(item: ApiObject) {
        navigation.navigate("BarCode", { itemPV: item, inputPV, client });
    }

    function handleReadItems(item: ApiReadObject[]) {
        navigation.navigate("ItemsCollected", { itemsPV: item, inputPV });
    }

    function handleReadItem(item: ApiReadObject[]) {
        navigation.navigate("ItemsCollected", { itemsPV: item, inputPV });
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
                <ListOptions onPress={() => handleModalOpen(null)}>
                    <Icon name="menu" />
                </ListOptions>
                <BackButton onPress={handlePVItemPage} />
            </ContainerView>
            <ContainerScroll>
                {modeActive === "readonly"
                    ? itemsPV.map((item) => (
                          <Card
                              key={item.CODIGO}
                              readMode={modeActive === "readonly"}
                              onPress={() => handleReadItem(readData)}
                              data={item}
                          />
                      ))
                    : itemsPV.map((item) => (
                          <Card
                              key={item.CODIGO}
                              lastPvProps={
                                  lastPv === item.ITEM + item.CODIGO
                                      ? true
                                      : false
                              }
                              onPress={() => handleBarCode(item)}
                              data={item}
                          />
                      ))}
            </ContainerScroll>
            {modeActive === "readonly" && (
                <Button
                    title="Mostrar todos"
                    onPress={() => handleReadItems(readData)}
                />
            )}

            <Modal visible={modal}>
                <OptionsModal close={handleModalOpen} modeActive={modeActive} />
            </Modal>
        </>
    );
}
