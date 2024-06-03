import styled from "styled-components";
import { BagIcon } from "./icons/bag-icon";

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    background-color: #115D8C;
    color: var(--button-text-color);
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    border-radius: 4px;
    border: none;
    width: 100%;
`

interface ButtonAddToCartProps {
    searchParams: string,
    data: any
}

export function ButtonAddToCart(props: ButtonAddToCartProps){

    const handleAddToCart = () => {
        let cartItems = localStorage.getItem('cart-items');
        if(cartItems) {
            let cartItemsArray = JSON.parse(cartItems);

            let existingItemIndex = cartItemsArray.findIndex((item: { id: string }) => item.id === props.searchParams);
 
            if(existingItemIndex != -1) {
                cartItemsArray[existingItemIndex].quantity += 1; 
            }else {
                cartItemsArray.push({
                    ...props.data,
                    id: props.searchParams,
                    quantity: 1
                })
            }
            localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
        }else {
            const newCart = [{
                ...props.data,
                id: props.searchParams,
                quantity: 1
        }]
            localStorage.setItem('cart-items', JSON.stringify(newCart));
        }
    }

    return (
        <Button onClick={handleAddToCart}>
            <BagIcon/>
            ADICIONAR AO CARRINHO
        </Button>
    )
}