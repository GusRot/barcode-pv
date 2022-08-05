import { createServer, Model } from "miragejs";
import { ApiObject } from "./src/types";

interface ApiObjects {
    PV1: ApiObject[];
    PV2: ApiObject[];
    default: {};
}

const apiObjects: ApiObjects = {
    default: {},
    PV1: [
        {
            id: "1",
            product: "PA001",
            qtd: 300,
            scannedQtd: 0,
            description: "Produto 1",
        },
        {
            id: "2",
            product: "PA002",
            qtd: 350,
            scannedQtd: 0,
            description: "Produto 2",
        },
        {
            id: "3",
            product: "PA003",
            qtd: 400,
            scannedQtd: 0,
            description: "Produto 3",
        },
    ],

    PV2: [
        {
            id: "4",
            product: "PA3001",
            qtd: 500,
            scannedQtd: 0,
            description: "Produto 31",
        },
        {
            id: "5",
            product: "PA3002",
            qtd: 550,
            scannedQtd: 0,
            description: "Produto 32",
        },
        {
            id: "6",
            product: "PA3003",
            qtd: 600,
            scannedQtd: 0,
            description: "Produto 33",
        },
    ],
};

export function makeServer() {
    let server = createServer({
        models: {
            product: Model,
        },

        seeds(server) {
            server.db.loadData({
                products: apiObjects,
                scannedQuantity: {},
            });
        },

        routes() {
            this.get(`/products`, () => {
                return apiObjects;
            });

            this.get(`/scannedQuantity`, () => {
                return {};
            });

            this.post("/scannedQuantity", (schema, request) => {
                const data = JSON.parse(request.requestBody);

                return schema.create("scannedQuantity", data);
            });
        },
    });

    return server;
}
