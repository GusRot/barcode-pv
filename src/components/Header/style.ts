import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { endColumn, padding } from "../../global/styles/theme";

interface ContainerProps {
    fixed: boolean;
}
export const Container = styled.View<ContainerProps>`
    ${padding}
    ${endColumn}
    width: 100%;
    padding-bottom: ${RFPercentage(5)}px;
    height: ${({ fixed }) => (fixed ? `${RFPercentage(17)}px` : "auto")};
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
