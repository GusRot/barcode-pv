import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    primary?: boolean;
    enabled?: boolean;
    font?: string;
    two?: boolean;
    icon?: boolean;
}

export default function Button({
    title,
    primary = true,
    enabled = true,
    font = "standard",
    two = false,
    icon = false,
    ...all
}: ButtonProps) {
    return (
        <ButtonContainer
            {...all}
            primary={primary}
            enabled={enabled}
            two={two}
            font={font}
            icon={icon}
        >
            <Title enabled={enabled} primary={primary} font={font} icon={icon}>
                {title}
            </Title>
        </ButtonContainer>
    );
}
