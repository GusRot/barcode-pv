export interface ApiObject {
    id: string;
    product: string;
    qtd: number;
    scannedQtd: number;
    description: string;
}

export interface ApiObjectScanned extends ApiObject {
    barcode: string;
}

export const testObject: ApiObject = {
    id: "1",
    product: "PA001",
    qtd: 300,
    scannedQtd: 0,
    description: "Produto 1 leve ou pesado",
};

const testObject2: ApiObject = {
    id: "2",
    product: "PA002",
    qtd: 330,
    scannedQtd: 0,
    description: "Produto 2 leve ou pesado",
};

const testObject3: ApiObject = {
    id: "3",
    product: "PA003",
    qtd: 340,
    scannedQtd: 0,
    description: "Produto 3 leve ou pesado",
};

const testObject4: ApiObject = {
    id: "4",
    product: "PA004",
    qtd: 440,
    scannedQtd: 0,
    description: "Produto 4 leve ou pesado",
};

export const testArrayObject: ApiObject[] = [testObject, testObject2, testObject3, testObject4]