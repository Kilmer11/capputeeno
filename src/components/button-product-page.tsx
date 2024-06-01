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

export function ButtonAddToCart(){
    return (
        <Button>
            <BagIcon/>
            ADICIONAR AO CARRINHO
        </Button>
    )
}