import styled from "styled-components";
import { SelectIcon } from "./icons/select-icon";
import { useContext } from "react";
import { FilterContext } from "@/context/filter-context";

interface SelectPageProps {
    selected: boolean,
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    div {
        display: flex;
        align-items: center;
        gap: 2px;
    }

    div:nth-of-type(2) {
        button {
            width: 32px;
            height: 32px;
            font-family: inherit;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--dark-text);
            background-color: var(--select-bg);
            border-radius: 8px;
            border: none;
        }
    }
`

const ButtonsContainer = styled.div`
`

const Button = styled.button<SelectPageProps>`
    background-color: ${props => props.selected ? "#FFF" : 'var(--select-bg)'};
    color: ${props => props.selected ? '#FFA585' : 'var(--dark-text)'};
    border: ${props => props.selected ? '1px solid #FFA585' : 'none'};
    width: 32px;
    height: 32px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`

const Select = styled.div`
    button:nth-of-type(1) {
        transform: rotate(90deg);
    }

    button:nth-of-type(2) {
        transform: rotate(-90deg);
    }
`

export function SelectPage() {
    const { page, setPage } = useContext(FilterContext);

    const handlePage = (value: number) => {
        setPage(value);
    }

    const handleBackPage = () => {
        if(page > 0) {
            setPage((prevEvent) => prevEvent - 1);
        }
    }

    const handleNextPage = () => {
        if(page < 4) {
            setPage((prevEvent) => prevEvent + 1);
        }
    }

    return (
        <Container>
            <ButtonsContainer>
                <Button selected={page === 0} onClick={() => handlePage(0)}>1</Button>
                <Button selected={page === 1} onClick={() => handlePage(1)}>2</Button>
                <Button selected={page === 2} onClick={() => handlePage(2)}>3</Button>
                <Button selected={page === 3} onClick={() => handlePage(3)}>4</Button>
                <Button selected={page === 4} onClick={() => handlePage(4)}>5</Button>
            </ButtonsContainer>
            <Select>
                <button onClick={handleBackPage}><SelectIcon/></button>
                <button onClick={handleNextPage}><SelectIcon/></button>
            </Select>
        </Container>
    )
}