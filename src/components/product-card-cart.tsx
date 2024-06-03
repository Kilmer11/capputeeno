import styled from "styled-components"
import { DeleteIcon } from "./icons/delete-icon"
import { SelectIcon } from "./icons/select-icon"
import { ChangeEvent } from "react"

const Card = styled.div`
    display: flex;
    width: 100%;
    height: 210px;
    border-radius: 8px;

    img {
        position: relative;
        width: 256px;
        border-radius: 8px 0 0 8px;
    }
`

const Content = styled.div`
    padding: 16px 30px 24px 30px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0 8px 8px 0;
    overflow: hidden;
    text-overflow: ellipsis;

    div:nth-of-type(1) {
        font-family: inherit;

        div { 
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;

            .name {
                font-size: 20px;
                font-weight: 300;
                line-height: 30px;
            }

            button {
                border: none;
                background-color: transparent;
                cursor: pointer;
            }
        }

        .descricao {
            font-size: 12px;
            font-weight: 400;
            line-height: 0px;
            color: var(--text-2);
            max-height: 50%;
        }
    }

    div:nth-of-type(2) {
        display: flex;
        justify-content: space-between;

        .price {
            font-family: inherit;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            color: var(--price-color);
        }

        select {
            background-color: var(--background-secondary);
            border: 1px solid #A8A8B3;
            border-radius: 8px;
            padding: 8px 12px;
            display: flex;
            align-items: center;
            color: var(--dark-text);
        }
    }
`

interface ProductCardProps {
    id: string,
    image: string,
    name: string, 
    price: string,
    descricao: string,
    quantity: number,
    handleChangeQuantity(id: string, quantity: number): void,
    handleDelete(id: string): void
}

export function ProductCard(props: ProductCardProps) {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.handleChangeQuantity(props.id, Number(e.target.value));
    }

    return (
        <Card>
            <img src={props.image} alt="" />
            <Content>
                <div>
                    <div>
                        <span className="name">{props.name}</span>
                        <button onClick={() => props.handleDelete(props.id)}>
                            <DeleteIcon/>
                        </button>
                    </div>
                    <span className="descricao">{props.descricao}</span>
                </div>
                <div>
                    <select value={props.quantity} onChange={handleChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <span className="price">{props.price}</span>
                </div>
            </Content>
        </Card>
    )
}