import {
    Icon,
    IconClose,
    ModalContainer,
    ModalOptions,
    ModalText,
} from "./style";

type modeOptions = "readonly" | "standard" | "romaneio";

interface ModalProps {
    close: (option: modeOptions) => void;
    modeActive: modeOptions;
}

export default function OptionsModal({ close, modeActive }: ModalProps) {
    const standard = modeActive === "standard" ? true : false;
    const readonly = modeActive === "readonly" ? true : false;
    const romaneio = modeActive === "romaneio" ? true : false;

    return (
        <ModalContainer>
            <ModalOptions onPress={() => close("standard")} active={standard}>
                <Icon name="checkbox" active={standard} />
                <ModalText active={standard}>Modo Leitura</ModalText>
            </ModalOptions>
            <ModalOptions onPress={() => close("readonly")} active={readonly}>
                <Icon name="checkbox" active={readonly} />
                <ModalText active={readonly}>Consultar Lidos</ModalText>
            </ModalOptions>
            <ModalOptions onPress={() => close("romaneio")} active={romaneio}>
                <Icon name="checkbox" active={romaneio} />
                <ModalText active={romaneio}>Romaneio</ModalText>
            </ModalOptions>
            <IconClose name="close" onPress={close} />
        </ModalContainer>
    );
}
