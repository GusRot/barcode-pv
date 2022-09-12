import { ButtonContainer, TipContainer } from "./style";
import Button from "../../../components/Button";
import TextContainer from "../../../components/Text";

interface SuccessScamProps {
    handleBarCode: () => void;
}

export default function SuccessScam({ handleBarCode }: SuccessScamProps) {
    return (
        <ButtonContainer>
            <TextContainer text="Seu código foi lido com sucesso. " />
            <Button title={"Adicione mais produtos"} onPress={handleBarCode} />
            <TipContainer>
                <TextContainer
                    text={`Você pode ler outros códigos de barras para somar suas quantidades automaticamente no Protheus.`}
                />
            </TipContainer>
        </ButtonContainer>
    );
}
