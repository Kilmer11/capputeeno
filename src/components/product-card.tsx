import { styled } from "styled-components";
import { FormatPrice } from "../utils/format-price";

const Card = styled.div`
    position: relative;
    width: 256px;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(10px);
    margin-bottom: 24px;
    cursor: pointer;

    &:hover {
        scale: 1.05;
        transition: 200ms;
    }
`

const ImageContainer = styled.img`
    width: 256px;
    height: 300px;
    border-radius: 8px 8px 0px 0px;
`

const Content = styled.div`
    padding: 8px 12px;
    background-color: #FFF;

    .text {
        color: var(--dark-text);
        font-family: inherit;
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        text-align: left;
        border-bottom: 1px solid #DCE2E5;
        margin-bottom: 8px;
    }

    .price {
        font-family: inherit;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        text-align: left;
        color: var(--price-color);
    }
`

interface ProductCardProps {
    title: string,
    price: number,
    image: string,
}

export function ProductCard(props: ProductCardProps) {

    const price = FormatPrice(props.price);

    return (
       <Card>
            <ImageContainer src={props.image}/>
            <Content>
                <p className="text">{props.title}</p>
                <p className="price">{price}</p>
            </Content>
       </Card> 
    )
}