import React from "react";
import { TextInputProps } from "react-native";
import { InputContainer } from "./style";

interface InputStyleProps extends TextInputProps {
    focus?: boolean;
    filled?: boolean;
}

export default function Input({
    focus = false,
    filled = false,
    ...all
}: InputStyleProps) {
    return <InputContainer focus={focus} filled={filled} {...all} />;
}
