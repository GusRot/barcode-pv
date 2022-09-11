import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacityProps } from "react-native";
import { centerColumn } from "../../global/styles/theme";

export const ListOptions = styled.TouchableOpacity<TouchableOpacityProps>`
    position: absolute;
    ${centerColumn}
    top: 11%;
    right: 5%;
    width: 10%;
    height: 60%;
    z-index: 20;
    border-radius: ${({ theme }) => RFValue(theme.common.radius)}px;
    background-color: ${({ theme }) => theme.colors.secondary_light};
`;

export const Icon = styled(Ionicons)`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${({ theme }) => RFValue(theme.fonts.icon_secondary)}px;
`;
