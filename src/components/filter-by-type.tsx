import { styled } from "styled-components";
import { useContext } from "react";
import { FilterContext } from "@/context/filter-context";
import { FilterType } from "@/types/filter-types";

interface FilterItemProps {
    selected: boolean,
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    gap: 40px;

    @media(max-width: ${props => props.theme.desktopBreakpoints}) {
        gap: 30px
    }
`

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-size: 16px;
    font-weight: ${props => props.selected ? '600' : '400'};
    line-height: 22px;
    color: ${props => props.selected ? '#000' : 'var(--dark-text)'};
    text-transform: uppercase;
    list-style: none;
    cursor: pointer;

    border-bottom: ${props => props.selected ? '4px solid var(--orange)' : 'none'};

    @media(max-width: ${props => props.theme.desktopBreakpoints}) {
        font-size: 12px;
    }
`

export function FilterByType() {
    const {type, setType} = useContext(FilterContext);

    const handleChangeType = (value: FilterType) => {
        setType(value);
    }

    return (
        <FilterList>
            <FilterItem selected={type === FilterType.ALL} onClick={() => handleChangeType(FilterType.ALL)}>TODOS OS PRODUTOS</FilterItem>
            <FilterItem selected={type === FilterType.SHIRT} onClick={() => handleChangeType(FilterType.SHIRT)}>CAMISETAS</FilterItem>
            <FilterItem selected={type === FilterType.MUG} onClick={() => handleChangeType(FilterType.MUG)}>CANECAS</FilterItem>
        </FilterList>
    )
}