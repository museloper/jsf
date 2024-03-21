const numbers = {
  setComma: (param) => {
    const regexp = /\B(?=(\d{3})+(?!\d))/g
    return param.toString().replace(regexp, ',')
  },
}
