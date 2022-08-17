export interface ApiObject {
    CODIGO: string;
    ITEM: string;
    QTDPV: number;
    DESCRICAO: string;
}

export interface ApiObjectScanned extends ApiObject {
    barcode: string;
}
