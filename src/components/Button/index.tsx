import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    primary?: boolean;
    enabled?: boolean;
}

export default function Button({
    title,
    primary = true,
    enabled = true,
    ...all
}: ButtonProps) {
    return (
        <ButtonContainer {...all} primary={primary} enabled={enabled}>
            <Title enabled={enabled} primary={primary}>
                {title}
            </Title>
        </ButtonContainer>
    );
}
