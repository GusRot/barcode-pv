import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import BackButton from "../../components/BackButton";
import Header from "../../components/Header";
import InformationTable from "../../components/InformationTable";
import { ContainerView } from "../../global/styles/theme";
import { ApiReadItem, RootStackParamList } from "../../routes";

interface ItemsCollectedProps {
    route: RouteProp<{ params: ApiReadItem }, "params">;
}

export default function ItemsCollected({ route }: ItemsCollectedProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { inputPV, itemsPV } = route.params;

    function handleBack() {
        navigation.goBack();
    }

    return (
        <>
            <ContainerView>
                <Header title={`PV:${inputPV}`} description="Todos os itens lidos:" />
                <BackButton onPress={handleBack} />
            </ContainerView>
            <InformationTable data={itemsPV} />
        </>
    );
}
