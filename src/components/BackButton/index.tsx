import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonContainerFont } from "./style";

interface BackButtonProps extends TouchableOpacityProps {}

export default function BackButton({ ...all }: BackButtonProps) {
    return (
        <ButtonContainer {...all}>
            <ButtonContainerFont name="arrow-back" />
        </ButtonContainer>
    );
}
