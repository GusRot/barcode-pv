import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { padding } from "../../global/styles/theme";

export const Text = styled.Text`
    ${padding}
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    color: ${({ theme }) => theme.colors.text_dark};
    text-align: center;
`;
