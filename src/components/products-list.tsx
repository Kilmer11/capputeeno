"use client"

import { UseProducts } from "@/hooks/useProducts";
import { ProductCard } from "./product-card";
import { styled } from "styled-components";

const Listagem = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;

    @media(max-width: ${props => props.theme.desktopBreakpoints}) {
        justify-content: center;
    }
`

export function Productslist() {
    const { data } = UseProducts();
    
    return (
        <Listagem>{data?.map((product) => <ProductCard
            key={product.id}
            title={product.name} 
            price={product.price_in_cents}
            image={product.image_url}
            id={product.id}/>
        )}
        </Listagem>
    )
}