import Button from "../Button";
import { Text, Container, HelperText } from "./style";

interface ErrorScreenProps {
    title: string;
    enablePermission: () => Promise<void>;
}

export default function ErrorScreen({
    title,
    enablePermission,
}: ErrorScreenProps) {
    return (
        <Container>
            <Text>{title}</Text>
            <Button
                onPress={enablePermission}
                title="Dar permissão da camera"
            />
            <HelperText>
                OBS: Caso não tenha sido possível acessar a camera, você deve
                habilitar a permissão manualmente através das configurações do
                seu celular.
            </HelperText>
        </Container>
    );
}
