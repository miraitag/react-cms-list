const currency = (amount: number, currencySymbol: string = "$", decimalPlaces: number = 2): string => {
  return `${currencySymbol}${amount.toFixed(decimalPlaces).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export { currency }