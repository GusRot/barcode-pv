import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { alignRow } from "../../global/styles/theme";

export const SubmitContainer = styled.View``;

export const BarCodeContainer = styled.View`
    flex: 1;
    margin: ${({ theme }) => RFValue(theme.common.padding)}px 0;
`;

export const QtdContainer = styled.View`
    ${alignRow};
    justify-content: center;
`;

export const QtdContainerDivider = styled.View`
    width: 45%;
    align-items: center;
    justify-content: center;
`;
