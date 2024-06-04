"use client"

import { FilterByType } from "./filter-by-type";
import { styled } from "styled-components";
import { FilterByPriority } from "./filter-by-priority";
import { SelectPage } from "./select-page";

const ContainerFilterBar = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
`

export function FilterBar() {
    return (
        <ContainerFilterBar>
            <FilterByType/>
            <div>
                <FilterByPriority/>
                <SelectPage/>
            </div>
        </ContainerFilterBar>
    )
}