export const postValidate = (values) => {
  let isValid = true;
  if(!values.tema){
    alert("pilih tema terlebih dahulu")
    isValid = false
    return
  }
  if(!values.title){
    alert("title belum terisi")
    isValid = false
    return
  }
  if(!values.date){
    alert("masukan tanggal terlebih dahulu")
    isValid = false
    return
  }
  if(!values.link){
    alert("masukan link website source nya")
    isValid = false
    return
  }
}