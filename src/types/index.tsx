export interface ApiObject {
    CODIGO: string;
    ITEM: string;
    QTDPV: number;
    DESCRICAO: string;
}

export interface ApiObjectScanned extends ApiObject {
    barcode: string;
}

export const testObject: ApiObject = {
    CODIGO: "1",
    ITEM: "PA001",
    QTDPV: 300,
    DESCRICAO: "Produto 1 leve ou pesado",
};

const testObject2: ApiObject = {
    CODIGO: "2",
    ITEM: "PA002",
    QTDPV: 330,
    DESCRICAO: "Produto 2 leve ou pesado",
};

const testObject3: ApiObject = {
    CODIGO: "3",
    ITEM: "PA003",
    QTDPV: 340,
    DESCRICAO: "Produto 3 leve ou pesado",
};

const testObject4: ApiObject = {
    CODIGO: "4",
    ITEM: "PA004",
    QTDPV: 440,
    DESCRICAO: "Produto 4 leve ou pesado",
};

export const testArrayObject: ApiObject[] = [testObject, testObject2, testObject3, testObject4]