import { TouchableOpacityProps } from "react-native";
import { ApiObject } from "../../../types";
import {
    Border,
    Container,
    Icon,
    ListInfoIcon,
    Text,
    TextDescription,
    TextTitle,
} from "./style";

interface CardProps extends TouchableOpacityProps {
    data: ApiObject;
    lastPvProps: Boolean;
}

export default function Card({ lastPvProps, data, ...rest }: CardProps) {
    const colorProps = (lastPvProps || data.QTDLIDO) && data.SLDSEP > 0;
    return (
        <Container
            {...rest}
            backgroundColor={data.QTDLIDO}
            last={lastPvProps}
            finished={data.SLDSEP > 0}
        >
            <Border>
                <TextDescription color={colorProps}>
                    {data.DESCRICAO}
                </TextDescription>
            </Border>
            <TextTitle color={colorProps}>Item: {data.ITEM} </TextTitle>
            <Text color={colorProps}>Produto: {data.CODIGO} </Text>
            <Text color={colorProps}>
                TOTAL Pedido: {String(data.QTDPV).replace(".", ",")}
                {" kg"}
            </Text>
            <Text color={colorProps}>
                A Liberar: {String(data.SLDLIB).replace(".", ",")}
                {" kg"}
            </Text>
            <Text color={colorProps}>
                Lido: {String(data.QTDLIDO).replace(".", ",")}
                {" kg"}
            </Text>
            <Text color={colorProps}>
                Saldo: {String(data.SLDSEP).replace(".", ",")}
                {" kg"}
            </Text>
            <ListInfoIcon>
                <Icon name="podium" />
            </ListInfoIcon>
        </Container>
    );
}
