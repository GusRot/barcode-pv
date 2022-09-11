import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export const ButtonContainer = styled.TouchableOpacity`
    position: absolute;
    left: 5%;
    top: 20%;
    width: 10%;
    height: 60%;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.secondary_light};
    z-index: 20;
`;


export const ButtonContainerFont = styled(Ionicons)`
    font-size: ${({ theme }) => theme.fonts.icon_secondary}px;
    color: ${({ theme }) => theme.colors.text_dark};
`;
