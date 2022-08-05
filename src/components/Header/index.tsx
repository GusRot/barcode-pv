import { Container, Title, Description } from "./style";

interface HeaderProps {
    title: string;
    description?: string;
}

export default function Header({ title, description }: HeaderProps) {
    return (
        <Container>
            <Title>{title}</Title>
            {description ? <Description>{description}</Description> : <></>}
        </Container>
    );
}
