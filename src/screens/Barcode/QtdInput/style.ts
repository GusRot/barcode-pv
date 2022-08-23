import styled from "styled-components/native";
import { alignRow, centerColumn } from "../../../global/styles/theme";

export const QtdContainer = styled.View`
    ${alignRow};
    justify-content: center;
`;

export const QtdContainerDivider = styled.View`
    ${centerColumn}
    width: 45%;
`;
