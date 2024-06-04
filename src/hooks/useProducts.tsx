import { FilterContext } from "@/context/filter-context";
import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useContext, useDeferredValue } from "react";
import { FilterProducts } from "../utils/Filters";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL, { query })
}

export function UseProducts() {
    const { type, priority, search, page } = useContext(FilterContext);
    const searchDeferred = useDeferredValue(search);
    const query = FilterProducts(type, priority, page);
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority, page],
        staleTime: 1000 * 60
    });

    const products = data?.data?.data?.allProducts;

    const searchProducts = products?.filter(product => product.name.toLocaleLowerCase().includes(searchDeferred.toLocaleLowerCase()))

    return {
        data: searchProducts
    }
}