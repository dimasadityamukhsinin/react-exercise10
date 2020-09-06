export const tambahSaldo = (tambah) => {
  return {
    type: 'TAMBAH_SALDO',
    payload: tambah
  }
}

export const kurangiSaldo = (kurangi) => {
  return {
    type: 'KURANGI_SALDO',
    payload: kurangi
  }
}