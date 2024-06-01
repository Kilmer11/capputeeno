export interface Product {
    id: string,
    name: string,
    price_in_cents: number,
    image_url: string,
    category: string
    description?: string
}

export interface ProductFetchResponse {
    "data": {
        "Product": Product
    }
}