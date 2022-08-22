import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
    fixed: boolean;
}
export const Container = styled.View<ContainerProps>`
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    padding: ${({ theme }) => RFValue(theme.common.padding)}px;
    padding-bottom: ${RFPercentage(5)}px;
    height: ${({ fixed }) => (fixed ? `${RFPercentage(20)}px` : "auto")};
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
