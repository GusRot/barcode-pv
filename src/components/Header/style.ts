import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: ${RFPercentage(5)}px;
    height: ${RFPercentage(25)}px;
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => RFValue(theme.fonts.title)}px;
    font-family: ${({ theme }) => theme.fonts.family.bold};
    color: ${({ theme }) => theme.colors.text_dark};
`;

export const Description = styled.Text`
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    color: ${({ theme }) => theme.colors.text_dark};
`;
