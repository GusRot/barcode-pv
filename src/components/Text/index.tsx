import { Text } from "./style";

interface TextProps {
    text: string;
}

export default function TextContainer({text}: TextProps) {
    return (
        <Text>{text}</Text>
    )
}
