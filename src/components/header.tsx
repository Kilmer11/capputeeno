"use client"

import { styled } from "styled-components";
import { PrimaryInputContainer } from "./inputHeader";
import { CartControl } from "./cart-control";
import { Saira_Stencil_One } from "next/font/google";
import { useContext } from "react";
import { FilterContext } from "@/context/filter-context";

const sairaStencil = Saira_Stencil_One({ 
  subsets: ["latin"],
  weight: ['400']
 });

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    @media (max-width: ${props => props.theme.desktopBreakpoints}) {
        padding: 15px 40px;
    }
`
const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
    text-decoration: none;

    @media (max-width: ${props => props.theme.desktopBreakpoints}) {
        font-size: 26px;
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

export function Header(props: HeaderProps) {
    const { search, setSearch } = useContext(FilterContext);

    return (
        <TagHeader>
            <Logo className={sairaStencil.className} href="/">
                Capputeeno
            </Logo>
            <Container>
                <PrimaryInputContainer 
                    value={search}
                    handleChange={setSearch}
                    placeholder="Procurando por algo específico?"/>
                <CartControl/>
            </Container>
        </TagHeader>
    )
}