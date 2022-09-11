import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { centerColumn, centerRow, padding } from "../../global/styles/theme";
import { TouchableOpacityProps } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ModalProps {
    active: boolean;
}

interface ModalButtonProps extends TouchableOpacityProps {
    active: boolean;
}

export const ModalContainer = styled.View`
    flex: 1;
    ${centerColumn}
    background-color: ${({ theme }) => theme.colors.secondary_light};
    position: relative;
`;

export const ModalOptions = styled.TouchableOpacity<ModalButtonProps>`
    ${padding};
    ${centerRow};
    width: 100%;
    margin: ${({ theme }) => RFValue(theme.common.padding)}px;
    border: 1px solid transparent;
    background-color: ${({ theme, active }) =>
        active ? theme.colors.success_light : theme.colors.primary_light};
`;

export const ModalText = styled.Text<ModalProps>`
    font-size: ${({ theme, active }) =>
        active
            ? `${RFValue(theme.fonts.title)}px`
            : `${RFValue(theme.fonts.primary)}px`};
    font-family: ${({ theme }) => theme.fonts.family.regular};
    color: ${({ theme, active }) =>
        active ? theme.colors.title : theme.colors.text_dark};
    text-align: center;
`;

export const Icon = styled(Ionicons)<ModalProps>`
    color: ${({ theme }) => theme.colors.green};
    font-size: ${({ theme }) => RFValue(theme.fonts.icon_secondary)}px;
    margin-right: ${({ theme }) => RFValue(theme.common.padding)}px;

    ${({ active }) =>
        !active &&
        css`
            display: none;
        `}
`;

export const IconClose = styled(Ionicons)`
    ${padding}
    position: absolute;
    font-size: ${({ theme }) => RFValue(theme.fonts.icon_secondary)}px;
    color: ${({ theme }) => theme.colors.text_dark};
    top: 0;
    right: 0;
`;
