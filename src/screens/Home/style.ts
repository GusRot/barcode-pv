import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const View = styled.View`
    align-items: center;
    width: 100%;
    padding-bottom: ${({ theme }) => RFValue(theme.common.padding * 2)}px;
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: ${RFPercentage(5)}px;
    height: ${RFPercentage(20)}px;
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.family.regular};
    font-size: ${({ theme }) => RFValue(theme.fonts.title)}px;
    color: ${({ theme }) => theme.colors.text_dark};
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.family.regular};
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const TextInput = styled.TextInput`
    text-align: center;
    width: 90%;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    color: ${({ theme }) => theme.colors.text_dark};
    border: 1px solid ${({ theme }) => theme.colors.text};
    margin: ${RFPercentage(10)}px;
    padding: ${({ theme }) => RFValue(theme.common.padding)}px 0;
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
    align-items: center;
    width: 90%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
    padding: ${({ theme }) => RFValue(theme.common.padding)}px;
    margin: ${({ theme }) => RFValue(theme.common.padding)}px;
`;
