import { theme } from "../../../global/styles/theme";
import { QtdContainerDivider, QtdContainer } from "./style";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useState } from "react";

interface QtdInputProps {
    inputQtd: string;
    setInputQtd: React.Dispatch<React.SetStateAction<string>>;
    handleQtdUpdate: () => void;
}

export default function QtdInput({
    inputQtd,
    setInputQtd,
    handleQtdUpdate,
}: QtdInputProps) {
    const [onfocus, setOnFocus] = useState(false);
    const [filled, setFilled] = useState(false);

    function handleIsfocused() {
        setOnFocus(true);
    }

    function handleOnBlur() {
        setOnFocus(false);
        setFilled(!!inputQtd);
    }

    function handleInputChange(value: string) {
        const inputQtdFormatted = value
            .replace(".", ",")
            .replace(/[^0-9,]/g, "")
            .replace(/[,]{2,}/g, ",");
        setInputQtd(inputQtdFormatted);
    }

    return (
        <QtdContainer>
            <QtdContainerDivider>
                <Input
                    placeholder="Qtd:"
                    keyboardType="numeric"
                    placeholderTextColor={theme.colors.text}
                    autoCorrect={false}
                    value={inputQtd}
                    onBlur={handleOnBlur}
                    onFocus={handleIsfocused}
                    focus={onfocus}
                    filled={filled}
                    onChangeText={(value) => handleInputChange(value)}
                />
            </QtdContainerDivider>
            <QtdContainerDivider>
                <Button
                    primary={false}
                    title={"Enviar"}
                    onPress={handleQtdUpdate}
                    enabled={!!inputQtd.replace(",", "")}
                />
            </QtdContainerDivider>
        </QtdContainer>
    );
}
