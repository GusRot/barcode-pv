import { TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface TitleProps extends TouchableOpacityProps {
    primary: boolean;
    enabled: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<TitleProps>`
    align-items: center;
    width: 90%;
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
    padding: ${({ theme }) => RFValue(theme.common.padding)}px;
    margin: ${({ theme }) => RFValue(theme.common.padding)}px;
    border: 1px solid transparent;
    background-color: ${({ primary, enabled, theme }) =>
        primary
            ? enabled
                ? theme.colors.primary
                : theme.colors.primary_light
            : theme.colors.background};

    ${({ primary, enabled }) =>
        !primary &&
        css`
            border-color: ${({ theme }) =>
                enabled ? theme.colors.primary : theme.colors.primary_light};
        `};
`;

export const Title = styled.Text<TitleProps>`
    font-family: ${({ theme }) => theme.fonts.family.regular};
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    color: ${({ primary, enabled, theme }) =>
        primary
            ? theme.colors.shape
            : enabled
            ? theme.colors.primary
            : theme.colors.primary_light};
`;
