import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const InputContainer = styled.TextInput`
    text-align: center;
    align-self: center;
    width: 90%;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    color: ${({ theme }) => theme.colors.text_dark};
    border: 1px solid ${({ theme }) => theme.colors.text};
    padding: ${({ theme }) => RFValue(theme.common.padding)}px 0;
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
`;
