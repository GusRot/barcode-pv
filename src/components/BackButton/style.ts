import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    position: absolute;
    left: 5%;
    top: 10%;
    width: 10%;
    height: 60%;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.secondary_light};
    z-index: 20;
`;

export const ButtonContainerFont = styled.Text`
    font-size: 40px;
    color: ${({ theme }) => theme.colors.attention};
`;
