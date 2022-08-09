import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const SubmitContainer = styled.View``;

export const BarCodeContainer = styled.View`
    flex: 1;
    margin: ${({ theme }) => RFValue(theme.common.padding)}px 0;
`;