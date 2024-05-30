"use client"

import { FilterByType } from "./filter-by-type";
import { styled } from "styled-components";
import { FilterByPriority } from "./filter-by-priority";

interface FilterBarProps {

}

const ContainerFilterBar = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
`

export function FilterBar(props: FilterBarProps) {
    return (
        <ContainerFilterBar>
            <FilterByType/>
            <FilterByPriority/>
        </ContainerFilterBar>
    )
}