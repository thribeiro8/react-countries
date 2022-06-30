const formattter = Intl.NumberFormat("pt-BR");

function formatNumber(value) {
  return formattter.format(value);
}

export { formatNumber };
