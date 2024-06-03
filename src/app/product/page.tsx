"use client"

import { BackButton } from "@/components/back-button";
import { DefaultPageLayout } from "@/components/default-page-layout"
import styled from "styled-components";
import { UseProducts } from "../../hooks/useProduct";
import { FormatPrice } from "@/utils/format-price";
import { ButtonAddToCart } from "@/components/button-product-page";

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

const ProductContainer = styled.section`
    display: flex;
    gap: 32px;
    width: 100%;

    img {
        max-width: 640px;
        width: 50%;
        border-radius: 4px;
    }
`

const Content = styled.div`
    height: 580px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const Info = styled.div`
    font-family: inherit;
    text-align: left;

    .category {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: var(--text-2);
        margin-bottom: 12px;
    }

    .title {
        font-size: 32px;
        font-weight: 300;
        line-height: 32px;
        color: var(--text-2);
        margin-bottom: 4px;
    }

    .price {
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        color: var(--price-color);
        margin-bottom: 24px;
    }

    .frete {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color: var(--text-2);
        margin-bottom: 58px;
    }

    .descrição {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        color: var(--dark-text);
        margin-bottom: 8px;
    }

    .descrição-content {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        color: var(--text-2);
    }
`

export default function ProductPage({ searchParams }: { searchParams: {id: string }}) {
    const { data } = UseProducts(searchParams.id);

    return (
        <DefaultPageLayout>
            <Container>
                <BackButton navigate="/"/>
                <ProductContainer>
                    <img src={data?.image_url} alt="" />
                    <Content>
                        <Info>
                            <p className="category">{data?.category}</p>
                            <p className="title">{data?.name}</p>
                            <p className="price">{FormatPrice(data?.price_in_cents ?? 0)}</p>
                            <p className="frete">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                            <p className="descrição">DESCRIÇÃO</p>
                            <p className="descrição-content">{data?.description}</p>
                        </Info>
                        <ButtonAddToCart data={data} searchParams={searchParams.id}/>
                    </Content>
                </ProductContainer>
            </Container>
        </DefaultPageLayout>
    )
}