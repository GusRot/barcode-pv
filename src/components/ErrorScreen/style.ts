import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { centerColumn } from "../../global/styles/theme";

export const Container = styled.View`
    flex: 1;
    ${centerColumn}
    background-color: ${({ theme }) => theme.colors.secondary_light};
`;

export const Text = styled.Text`
    font-size: ${({ theme }) => RFValue(theme.fonts.title)}px;
    font-family: ${({ theme }) => theme.fonts.family.bold};
    color: ${({ theme }) => theme.colors.text_dark};
    padding: 0 ${({ theme }) => RFValue(theme.common.padding)}px;
`;

export const HelperText = styled.Text`
    font-size: ${({ theme }) => RFValue(theme.fonts.secondary)}px;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    color: ${({ theme }) => theme.colors.text_dark};
    padding: 0 ${({ theme }) => RFValue(theme.common.padding)}px;
    text-align: center;
    margin-top: ${({ theme }) => RFValue(theme.common.padding * 3)}px;
`;
