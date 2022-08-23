export interface AuthToken {
    token: string;
    time: number;
    refresh: string;
    data: Date;
}

export interface ApiObject {
    CODIGO: string;
    ITEM: string;
    QTDPV: number;
    DESCRICAO: string;
}

export interface SubmitScan {
    id: string;
    Pedido: string;
    Item: string;
    Produto: string;
    Peso: number;
}

export interface ApiObjectScanned extends ApiObject {
    barcode: string;
}
