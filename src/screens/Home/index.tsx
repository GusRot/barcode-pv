import { Text, TextInput, TouchableOpacity } from "./style";

export default function Home() {
    function handleItemPV() {
        console.log("ok");
    }

    return (
        <>
            <Text>Informe o numero do PV</Text>
            <TextInput
                placeholder="Pedido de Venda:"
                placeholderTextColor={"#333"}
            />

            <TouchableOpacity onPress={handleItemPV}>
                <Text>confirmar</Text>
            </TouchableOpacity>
        </>
    );
}
