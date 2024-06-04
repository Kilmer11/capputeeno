"use client"

import { styled } from "styled-components";
import { SelectIcon } from "./icons/select-icon";
import { useContext, useState } from "react";
import { FilterContext } from "@/context/filter-context";
import { PriorityTypes } from "@/types/priority-types";

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 24px;
    justify-content: flex-end;

    svg {
        margin-left: 12px;
    }

    button {
        border: none;
        font-family: inherit;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        text-align: center;
        color: var(--dark-text);
        background: transparent;
        cursor: pointer;

        display: flex;
        align-items: center;

        @media(max-width: ${props => props.theme.desktopBreakpoints}) {
            font-size: 12px;
        }
    }
`

const PriorityFilter = styled.ul`
    position: absolute;
    z-index: 99;
    top: 100%;
    width: 208px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-radius: 4px;
    background: #FFF;
    box-shadow: 0px 6px 12px 0px #0000001A;
    list-style: none;
    cursor: pointer;

    li {
        list-style: none;
        font-family: inherit;
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        color: var(--dark-text);

    }

    @media(max-width: ${props => props.theme.desktopBreakpoints}) {
        left: -50%;
        width: 180px;
        
        li {
            font-size: 12px;
        }
    }
`

export function FilterByPriority() {
    const [ isOPen, setIsOpen ] = useState(false);
    const { setPriority } = useContext(FilterContext);
    
    const handleIsOpen = () => {
        setIsOpen(isOPen => !isOPen)
    }

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value);
        setIsOpen(false);
    }

    return (
        <FilterContainer>
            <button onClick={handleIsOpen}>
                Organizar por
                <SelectIcon/>
            </button>
            {isOPen && 
                <PriorityFilter>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
                </PriorityFilter>
            }
        </FilterContainer>
    )
}