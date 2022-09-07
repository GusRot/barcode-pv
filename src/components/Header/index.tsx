import { Container, Title, Description } from "./style";

interface HeaderProps {
    title?: string;
    description?: string;
    fixed?: boolean;
}

export default function Header({
    title,
    description,
    fixed = true,
}: HeaderProps) {
    return (
        <Container fixed={fixed}>
            {title ? <Title>{title}</Title> : <></>}
            {description ? <Description>{description}</Description> : <></>}
            <Description>{"Cliente Nome"}</Description>
        </Container>
    );
}
