"use client"

import { BackButton } from "@/components/back-button";
import { DefaultPageLayout } from "@/components/default-page-layout";
import styled from "styled-components";
import { CheckIn } from "@/components/checkIn";
import { ProductCard } from "@/components/product-card-cart";
import { useLocalStorage } from "@/hooks/useLocalStore";
import { ProductInCart } from "@/types/product";
import { FormatPrice } from "@/utils/format-price";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Products = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;

    span:nth-of-type(1) {
        font-family: inherit;
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        color: var(--text-2);
    }

    span:nth-of-type(2) {
        font-family: inherit;
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        margin-bottom: 20px;

        span {
            font-family: inherit;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
        }
    }
`

const Content = styled.div`
    display: flex;
    gap: 32px;
    justify-content: space-between;

    @media(max-width: ${props => props.theme.desktopBreakpoints}) {
        flex-direction: column;
    }
`

const CartList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
`

export default function CartPage() {
    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])

    const CalcTotalPrice = (value: ProductInCart[]) => {
        return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0);
    }

    const TotalPrice = FormatPrice(CalcTotalPrice(value));

    const handleChangeQuantity = (id: string, quantity: number) => {
        const newValue = value.map((item) => {
            if(item.id !== id) return item;
            return {...item, quantity: quantity}
        })
        updateLocalStorage(newValue);
    }

    const handleDelete = (id: string) => {
        const newValue = value.filter((item) => {
            return item.id !== id ? item : item == null
        })
        updateLocalStorage(newValue);
    }
    
    return (
        <DefaultPageLayout>
            <Container>
                <BackButton navigate="/"/>
                <Content>
                    <Products>
                        <span>SEU CARRINHO</span>
                        <span>Total ({value.length} produtos) <span>{TotalPrice}</span></span>
                        <CartList>
                            {value.map((item) => <ProductCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={FormatPrice(item.price_in_cents)}
                                image={item.image_url}
                                quantity={item.quantity}
                                descricao={item.description ?? ""}
                                handleChangeQuantity={handleChangeQuantity}
                                handleDelete={handleDelete}
                            />)}
                        </CartList>
                    </Products>
                    <CheckIn  
                        price={CalcTotalPrice(value)}
                    /> 
                </Content>
            </Container>
        </DefaultPageLayout>
    )
}