import { ApiReadObject } from "../../types";
import {
    Container,
    Row,
    RowItem,
    RowTitle,
    ContainerScroll,
    Separator,
    Text,
    SeparatorV,
    TextSecondary,
    TextTitle,
    Icon,
} from "./style";

interface InformationTable {
    data: ApiReadObject[];
}

export default function InformationTable({ data }: InformationTable) {
    return (
        <ContainerScroll>
            {data.map((items) => (
                <Container key={items.CODIGO}>
                    <Separator />
                    <RowItem>
                        <TextTitle>
                            {items.ITEM + "-" + items.DESCRICAO}
                        </TextTitle>
                    </RowItem>
                    <RowTitle>
                        <Text>Data/Hora</Text>
                        <SeparatorV />
                        <Text>PESO</Text>
                        <SeparatorV />
                        <TextSecondary>Modo</TextSecondary>
                        <SeparatorV />
                        <TextSecondary>DEL</TextSecondary>
                    </RowTitle>
                    {items.coleta.map((item) => (
                        <Row key={item.HORA}>
                            <Text>{`${item.DATA}${"\n"}${item.HORA}`}</Text>
                            <SeparatorV />
                            <Text>{String(item.PESO)}</Text>
                            <SeparatorV />
                            <TextSecondary>Lido</TextSecondary>
                            <SeparatorV />
                            <Icon name="trash" />
                        </Row>
                    ))}
                </Container>
            ))}
        </ContainerScroll>
    );
}
