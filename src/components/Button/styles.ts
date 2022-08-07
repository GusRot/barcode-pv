import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    align-items: center;
    width: 90%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
    padding: ${({ theme }) => RFValue(theme.common.padding)}px;
    margin: ${({ theme }) => RFValue(theme.common.padding)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.family.regular};
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    color: ${({ theme }) => theme.colors.shape};
`;
