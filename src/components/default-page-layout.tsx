"use client"

import styled from "styled-components"

export const DefaultPageLayout = styled.div`
    min-height: 100vh; 
    background-color: var(--bg-primary);

    padding: 34px 160px 40px 160px;

    @media(max-width: 832px) {
        padding: 24px 40px 40px 40px;
    }
`