import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
    backgroundColor: Number;
    last: Boolean;
    finished: Number;
}

interface TextProps {
    color: Boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    align-items: flex-start;
    width: 90%;
    padding-bottom: ${({ theme }) => RFValue(theme.common.padding)}px;
    background-color: ${({ theme, backgroundColor }) =>
        backgroundColor ? theme.colors.tertiary : theme.colors.primary};
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
    margin: ${({ theme }) => RFValue(theme.common.padding)}px;

    ${({ last }) =>
        last &&
        css`
            background-color: ${({ theme }) => theme.colors.success};
        `};

    ${({ finished }) =>
        !finished &&
        css`
            background-color: ${({ theme }) => theme.colors.text};
        `};
`;

export const Text = styled.Text<TextProps>`
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    color: ${({ theme }) => theme.colors.shape};
    padding: 0 ${({ theme }) => RFValue(theme.common.padding)}px;

    ${({ color }) =>
        color &&
        css`
            color: ${({ theme }) => theme.colors.text_dark};
        `};
`;

export const TextTitle = styled.Text<TextProps>`
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    color: ${({ theme }) => theme.colors.shape};
    padding: 0 ${({ theme }) => RFValue(theme.common.padding)}px;
    padding-top: ${({ theme }) => RFValue(theme.common.padding)}px;

    ${({ color }) =>
        color &&
        css`
            color: ${({ theme }) => theme.colors.text_dark};
        `};
`;

export const Border = styled.View`
    border: 0px solid ${({ theme }) => theme.colors.text_dark};
    border-bottom-width: 1px;
    align-items: center;
    width: 100%;
    padding-bottom: ${({ theme }) => RFValue(theme.common.padding / 2)}px;
`;

export const TextDescription = styled.Text<TextProps>`
    padding: 0 ${({ theme }) => RFValue(theme.common.padding)}px;
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    font-family: ${({ theme }) => theme.fonts.family.light};
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    padding-top: ${({ theme }) => RFValue(theme.common.padding)}px;

    ${({ color }) =>
        color &&
        css`
            color: ${({ theme }) => theme.colors.text_dark};
        `};
`;

export const ButtonView = styled.View`
`