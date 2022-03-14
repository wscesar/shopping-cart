const formatCurrency = price => {
  return '$' +  Number(price).toFixed(2).toLocaleString()
}

export default formatCurrency