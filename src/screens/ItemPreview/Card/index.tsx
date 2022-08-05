import { TouchableOpacityProps } from "react-native";
import { ApiObject } from "../../../types";
import { Border, Container, Text, TextDescription, TextTitle } from "./style";

interface CardProps extends TouchableOpacityProps {
    data: ApiObject;
}

export default function Card({ data, ...rest }: CardProps) {
    return (
        <Container {...rest}>
            <Border>
                <TextTitle> Item: {data.id} </TextTitle>
            </Border>
            <Text> Produto: {data.product} </Text>
            <Text> Quantidade: {data.qtd} </Text>
            <Text> Quantidade Lida: {data.scannedQtd} </Text>
            <TextDescription> Descrição: {data.description} </TextDescription>
        </Container>
    );
}
