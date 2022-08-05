import {
    View,
    Title,
    Text,
    TextInput,
    TouchableOpacity,
    Header,
    Container,
} from "./style";
import { theme } from "../../global/styles/theme";
import { api } from "../../services/api";
import { useState } from "react";

export default function Home() {
    const [pv, setPv] = useState("");

    function handleItemPV() {
        const response = api.get(`/pv/${pv}`);
    }

    return (
        <Container>
            <View>
                <Header>
                    <Title>Informe o numero do PV</Title>
                </Header>
                <TextInput
                    placeholder="Pedido de Venda:"
                    placeholderTextColor={theme.colors.text}
                    autoCorrect={false}
                    onChangeText={setPv}
                />
            </View>

            <TouchableOpacity onPress={handleItemPV}>
                <Text>CONFIRMAR</Text>
            </TouchableOpacity>
        </Container>
    );
}
