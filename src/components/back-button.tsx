"use client"

import styled from "styled-components";
import { BackIcon } from "./icons/back-icon";
import { useRouter } from "next/navigation";

const Button = styled.button`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    color: var(--text);
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    font-family: inherit;
    border: 0px;
    cursor: pointer;
`

interface BackButtonProps {
    navigate: string;
}

export function BackButton({ navigate }: BackButtonProps) {
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navigate);
    }

    return (
        <Button onClick={handleNavigate}>
            <BackIcon/>
            Voltar
        </Button>
    )
}