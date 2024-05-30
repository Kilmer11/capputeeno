import { styled } from "styled-components";
import { SearchLoupe } from "./icons/search-loupe";
import { InputHTMLAttributes } from "react";

const InputHeader = styled.input`
    width: 352px;
    padding: 10px 0px 10px 16px;
    border-radius: 8px;
    background-color: var(--background-secondary);
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--dark-text);
    border: none;

    @media (max-width: ${props => props.theme.desktopBreakpoints}) {
        width: 250px;
        font-size: 12px;
        line-height: 15px;
    }
`

const InputContainer = styled.div`
    position: relative;

    svg {
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    handleChange: (value: string) => void
}

export function PrimaryInputContainer(props: InputProps) {
    return (
        <InputContainer>
            <InputHeader onChange={(event) => props.handleChange(event.target.value)} {...props}/>
            <SearchLoupe/>
        </InputContainer>
    )
}