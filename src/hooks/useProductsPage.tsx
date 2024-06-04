// import { FilterContext } from "@/context/filter-context";
// import { ProductsFetchResponse } from "@/types/products-response";
// import { useQuery } from "@tanstack/react-query";
// import axios, { AxiosPromise } from "axios";
// import { useContext } from "react";

// const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

// const fetcher = (page: number): AxiosPromise<ProductsFetchResponse> => {
//     return axios.post(API_URL, { query:
//         `
//             query {
//                 allProducts(page: ${page} perPage: 12) {
//                     id
//                     name
//                     price_in_cents
//                     image_url
//                     category
//                     sales
//                 }
//             }
//         `
//     }
//     )
// }

// export function UseProductsPage() {
//     const { page } = useContext(FilterContext);
//     const { data } = useQuery({
//         queryFn: () => fetcher(page),
//         queryKey: ['products']
//     });

//     return {
//         data: data?.data?.data?.allProducts
//     }
// }