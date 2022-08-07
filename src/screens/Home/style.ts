import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const View = styled.View`
    align-items: center;
    width: 100%;
    padding-bottom: ${RFPercentage(5)}px;
`;

export const InputContainer = styled.View`
    width: 100%;
    margin: ${RFPercentage(10)}px;
`;
