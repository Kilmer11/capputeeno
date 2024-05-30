export function FormatPrice(value: number) {
    const ValorEmReais = value/100;
    return ValorEmReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
}