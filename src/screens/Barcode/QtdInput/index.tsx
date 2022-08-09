import { theme } from "../../../global/styles/theme";
import { QtdContainerDivider, QtdContainer } from "./style";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

interface QtdInputProps {
    inputQtd: number | undefined;
    setInputQtd: React.Dispatch<React.SetStateAction<number | undefined>>;
    handleQtdUpdate: () => void;
}

export default function QtdInput({
    inputQtd,
    setInputQtd,
    handleQtdUpdate,
}: QtdInputProps) {
    return (
        <QtdContainer>
            <QtdContainerDivider>
                <Input
                    placeholder="Qtd:"
                    keyboardType="numeric"
                    placeholderTextColor={theme.colors.text}
                    autoCorrect={false}
                    value={inputQtd}
                    onChangeText={setInputQtd}
                />
            </QtdContainerDivider>
            <QtdContainerDivider>
                <Button title={"Somar"} onPress={handleQtdUpdate} />
            </QtdContainerDivider>
        </QtdContainer>
    );
}
