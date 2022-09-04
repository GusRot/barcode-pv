import { TouchableOpacityProps } from "react-native";
import { ApiObject } from "../../../types";
import { Border, Container, Text, TextDescription, TextTitle } from "./style";

interface CardProps extends TouchableOpacityProps {
    data: ApiObject;
    lastPvProps: Boolean;
}

export default function Card({ lastPvProps, data, ...rest }: CardProps) {
    return (
        <Container {...rest} backgroundColor={data.QTDLIDO} last={lastPvProps}>
            <Border>
                <TextDescription> {data.DESCRICAO} </TextDescription>
            </Border>
            <TextTitle>Item: {data.ITEM} </TextTitle>
            <Text>Produto: {data.CODIGO} </Text>
            <Text>
                TOTAL Pedido: {String(data.QTDPV).replace(".", ",")}
                {" kg"}
            </Text>
            <Text>
                A Liberar: {String(data.SLDLIB).replace(".", ",")}
                {" kg"}
            </Text>
            <Text>
                Lido: {String(data.QTDLIDO).replace(".", ",")}
                {" kg"}
            </Text>
            <Text>
                Saldo: {String(data.SLDSEP).replace(".", ",")}
                {" kg"}
            </Text>
        </Container>
    );
}
