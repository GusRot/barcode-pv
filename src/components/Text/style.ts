import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Text = styled.Text`
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    color: ${({ theme }) => theme.colors.text_dark};
    text-align: center;
    padding: ${({ theme }) => RFValue(theme.common.padding)}px;
`;
