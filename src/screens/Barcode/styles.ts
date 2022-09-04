import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const SubmitContainer = styled.View``;

export const BarCodeContainer = styled.View`
    flex: 1;
    margin: ${({ theme }) => RFValue(theme.common.padding)}px 0;
    padding-bottom: ${({ theme }) => RFValue(theme.common.padding)}px;
`;

export const BarCodeEnableContainer = styled.View`
    flex: 1;
    justify-content: flex-start;
`;

export const TextError = styled.Text`
    text-align: center;
    width: 100%;
    color: ${({ theme }) => theme.colors.attention};
`;
