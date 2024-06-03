import styled from "styled-components";
import { CheckInButton } from "./checkIn-button";
import { FormatPrice } from "@/utils/format-price";

const CheckInContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 24px 24px 24px;
    background-color: #FFF;
    height: 600px;
    min-width: 340px;
    max-width: 50%;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .title {
        margin-bottom: 30px;
        color: var(--text-2);
        font-family: inherit;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
    }

    div:nth-of-type(4) {
        font-family: inherit;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        margin-top: 8px;
    }

    button {
        margin-top: 25px;
    }
`

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #DCE2E5;
`

const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    a {
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        color: var(--dark-text);
    }
`

const ItemInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: var(--text-2);
`

interface CheckInProps {
    price: number
}

export function CheckIn(props: CheckInProps) {
    const total =  props.price + 4000;

    return (
        <CheckInContainer>
            <InfoContainer>
                <span className="title">RESUMO DO PEDIDO</span>
                <ItemInfo>
                    <p>Subtotal de produtos</p>
                    <p>{FormatPrice(props.price)}</p>
                </ItemInfo>
                <ItemInfo>
                    <p>Entrega</p>
                    <p>R$ 40,00</p>
                </ItemInfo>
                <Line>
                    <div></div>
                </Line>
                <ItemInfo>
                    <p>Total</p>
                    <p>{FormatPrice(total)}</p>
                </ItemInfo>
                <CheckInButton>FINALIZAR A COMPRA</CheckInButton>
            </InfoContainer>
            <Links>
                <a href="">AJUDA</a>
                <a href="">REEMBOLSOS</a>
                <a href="">ENTREGAS E FRETE</a>
                <a href="">TROCAS E DEVOLUÇÕES</a>
            </Links>
        </CheckInContainer>
    )
}