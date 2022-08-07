import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export default function Button({ title, ...all }: ButtonProps) {
    return (
        <ButtonContainer {...all}>
            <Title>{title}</Title>
        </ButtonContainer>
    );
}
