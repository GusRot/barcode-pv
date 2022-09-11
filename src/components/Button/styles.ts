import { TouchableOpacityProps } from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { padding } from "../../global/styles/theme";

interface TitleProps extends TouchableOpacityProps {
    primary: boolean;
    enabled: boolean;
    two: boolean;
    font: string;
    icon: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<TitleProps>`
    ${padding}
    align-items: center;
    width: 90%;
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
    margin: ${({ theme }) => RFValue(theme.common.padding)}px 5%;
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

    ${({ two }) =>
        two &&
        css`
            height: ${RFPercentage(10)}px;
            width: 42.5%;
            margin-left: 2.5%;
            margin-right: 2.5%;
        `};

    ${({ icon }) =>
        icon &&
        css`
            padding: 0;
        `};
`;

export const Title = styled.Text<TitleProps>`
    font-family: ${({ theme }) => theme.fonts.family.regular};
    text-align: center;
    font-size: ${({ theme, font }) =>
        font === "standard"
            ? `${RFValue(theme.fonts.primary)}px`
            : `${RFValue(theme.fonts.secondary)}px`};

    color: ${({ primary, enabled, theme }) =>
        primary
            ? theme.colors.shape
            : enabled
            ? theme.colors.primary
            : theme.colors.primary_light};

    ${({ icon, theme }) =>
        icon &&
        css`
            font-size: ${RFValue(theme.fonts.icon)}px;
        `};
`;
