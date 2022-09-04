import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
    backgroundColor: Number;
    last: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    align-items: flex-start;
    width: 90%;
    padding-bottom: ${({ theme }) => RFValue(theme.common.padding)}px;
    background-color: ${({ theme, backgroundColor }) =>
        backgroundColor ? theme.colors.success : theme.colors.primary};
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
    margin: ${({ theme }) => RFValue(theme.common.padding)}px;

    ${({ last }) =>
        last &&
        css`
            background-color: ${({ theme }) => theme.colors.attention};
        `};
`;

export const Text = styled.Text`
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    color: ${({ theme }) => theme.colors.shape};
    padding: 0 ${({ theme }) => RFValue(theme.common.padding)}px;
`;

export const TextTitle = styled.Text`
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    color: ${({ theme }) => theme.colors.shape};
    padding: 0 ${({ theme }) => RFValue(theme.common.padding)}px;
    padding-top: ${({ theme }) => RFValue(theme.common.padding)}px;
`;

export const Border = styled.View`
    border: 0px solid ${({ theme }) => theme.colors.text_dark};
    border-bottom-width: 1px;
    align-items: center;
    width: 100%;
    padding-bottom: ${({ theme }) => RFValue(theme.common.padding / 2)}px;
`;

export const TextDescription = styled.Text`
    padding: 0 ${({ theme }) => RFValue(theme.common.padding)}px;
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    font-family: ${({ theme }) => theme.fonts.family.light};
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    padding-top: ${({ theme }) => RFValue(theme.common.padding)}px;
`;
