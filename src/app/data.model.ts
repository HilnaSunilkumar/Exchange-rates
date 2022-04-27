export interface exRatesResponse {
    rates:{
        [key: string]: {
            name: string,
            unit: string,
            value: number,
            type: string
        },
    }
}