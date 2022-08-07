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
                <TextTitle> Item: {data.CODIGO} </TextTitle>
            </Border>
            <Text> Produto: {data.ITEM} </Text>
            <Text> Quantidade: {data.QTDPV} </Text>
            <TextDescription> Descrição: {data.DESCRICAO} </TextDescription>
        </Container>
    );
}
