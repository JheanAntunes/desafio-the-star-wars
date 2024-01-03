export const formatedNumber = (valorCaracteristica: string) => {
  return Number.isNaN(Number(valorCaracteristica))
    ? valorCaracteristica
    : new Intl.NumberFormat('pt-BR').format(Number(valorCaracteristica))
}
