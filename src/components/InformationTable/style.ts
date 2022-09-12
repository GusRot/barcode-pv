import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { alignRow, padding } from "../../global/styles/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Container = styled.View`
    margin-bottom: ${({ theme }) => RFValue(theme.common.padding * 2)}px;
`;

export const ContainerScroll = styled.ScrollView``;

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.text_dark};
`;

export const SeparatorV = styled.View`
    height: 100%;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.text_dark};
`;

export const RowTitle = styled.View`
    ${alignRow}
    border-bottom: 1px solid ${({ theme }) => theme.colors.text_dark};
`;

export const RowItem = styled.View`
    ${alignRow}
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.text_dark};
`;

export const Row = styled.View`
    ${alignRow}
    border-bottom: 1px solid ${({ theme }) => theme.colors.text_dark};
    border: 1px solid ${({ theme }) => theme.colors.text_dark};
`;

export const TextTitle = styled.Text`
    ${padding}
    font-size: ${({ theme }) => RFValue(theme.fonts.primary)}px;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    color: ${({ theme }) => theme.colors.text_dark};
    text-align: center;
`;

export const Text = styled.Text`
    padding: ${({ theme }) => RFValue(theme.common.padding - 5)}px;
    font-size: ${({ theme }) => RFValue(theme.fonts.secondary)}px;
    font-family: ${({ theme }) => theme.fonts.family.regular};
    color: ${({ theme }) => theme.colors.text_dark};
    text-align: center;
    width: 30%;
`;

export const TextSecondary = styled.Text`
    padding: ${({ theme }) => RFValue(theme.common.padding / 2)}px;
    font-size: ${({ theme }) => RFValue(theme.fonts.small)}px;
    font-family: ${({ theme }) => theme.fonts.family.light};
    color: ${({ theme }) => theme.colors.text_dark};
    text-align: center;
    width: 20%;
`;

export const Icon = styled(Ionicons)`
    font-size: ${({ theme }) => theme.fonts.icon_secondary}px;
    color: ${({ theme }) => theme.colors.attention_light};
    text-align: center;
    width: 20%;
`;
