import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    primary?: boolean;
}

export default function Button({ title, primary = true, ...all }: ButtonProps) {
    return (
        <ButtonContainer {...all} primary={primary}>
            <Title primary={primary}>{title}</Title>
        </ButtonContainer>
    );
}
