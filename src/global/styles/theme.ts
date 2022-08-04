import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const theme = {
    colors: {
        primary: "#13274A",
        secondary: "#FBBB57",
        secondary_light: "rgba(251,187,87,0.5)",

        success: "#07E78E",
        success_light: "rgba(7,231,142, 0.4)",

        attention: "#c91d43",
        attention_light: "rgba(201, 29, 67, 0.5)",

        shape: "#fff",
        title: "#363F5F",
        text: "#a5a5a5",
        text_dark: "#000",
        background: "#f0f2f5",
    },
    fonts: {
        primary: 18,
        secondary: 14,

        icon: 24,
        title: 30,
        dashboard: 32,
        amount: 20,

        family: {
            light: "Roboto_300Light",
            regular: "Roboto_400Regular",
            medium: "Roboto_500Medium",
            bold: "Roboto_700Bold",
        },
    },
    common: {
        padding: 20,
        gap: 10,
        logo: 50,
        radius: 10,
        radius_secondary: 5,
        icon: 20,
    },
};

export const alignRow = css`
    flex-direction: row;
    align-items: center;
`;

export const justifyRow = css`
    flex-direction: row;
    align-items: center;
`;

export const centerRow = css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const centerColumn = css`
    align-items: center;
    justify-content: center;
`;

export const padding = css`
    padding: ${({ theme }) => RFValue(theme.common.padding)}px;
`;

export const MainWrapper = styled.View`
    ${padding}
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
`;
