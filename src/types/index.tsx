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
    QTDLIDO: number;
    SLDLIB: number;
    SLDSEP: number;
    DESCRICAO: string;
}

interface ReadData {
    DATA: string;
    HORA: string;
    PESO: number;
    ROMANEIO: string;
}

export interface ApiReadObject {
    CODIGO: string;
    DESCRICAO: string;
    ITEM: string;
    coleta: ReadData[];
}

export interface SubmitScan {
    id: string;
    Pedido: string;
    Item: string;
    Produto: string;
    Peso: number;
    Modo: boolean;
}

export interface ApiObjectScanned extends ApiObject {
    barcode: string;
}

export interface AsyncData extends SubmitScan {
    total: Number;
}
