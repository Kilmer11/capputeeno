// import { useLocalStorage } from "@/hooks/useLocalStore";
import { useLocalStorage } from "@/hooks/useLocalStore";
import { CartIcon } from "./icons/cart-icon";
import { styled } from "styled-components";

const CartCount = styled.span`
    width: 20px;
    height: 20px;
    color: white;
    background: var(--delete-color);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 11px;
    left: 16px
`

const Container = styled.div`
    position: relative;
`

export function CartControl() {
    const { value } = useLocalStorage('cart-items', [])

    return (
        <Container>
            <CartIcon/>
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}