import { useState } from "react";
import Input from "../../../components/Input";
import { theme } from "../../../global/styles/theme";
import { InputContainer } from "./style";

interface InputPVProps {
    value: string;
    valueChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function Inputvalue({ value, valueChange }: InputPVProps) {
    const [onfocus, setOnFocus] = useState(false);
    const [filled, setFilled] = useState(false);

    function handleIsfocused() {
        setOnFocus(true);
    }

    function handleOnBlur() {
        setOnFocus(false);
        setFilled(!!value);
    }

    return (
        <InputContainer>
            <Input
                placeholder="Pedido de Venda:"
                placeholderTextColor={theme.colors.text}
                autoCorrect={false}
                onChangeText={valueChange}
                autoCapitalize="none"
                value={value}
                onBlur={handleOnBlur}
                onFocus={handleIsfocused}
                focus={onfocus}
                filled={filled}
            />
        </InputContainer>
    );
}
