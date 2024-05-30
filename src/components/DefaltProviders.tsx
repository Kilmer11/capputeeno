"use client"

import { FilterContextProvider } from "@/context/filter-context";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
    children: ReactNode
}

const theme = {
    desktopBreakpoints: "832px"
}

export function DefaultProviders({ children}: DefaultProvidersProps) {
    const client = new QueryClient();
    
    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
}