const Currency_Formatter = Intl.NumberFormat(undefined, {currency:"USD", style: "currency"})

export function Currency(number: number){
return Currency_Formatter.format(number)
}
