const  isEmpty = /\S/;


const chineseInputFailed =()=>{
  $('#chineseInput').addClass(" is-invalid")
  $("#validationChineseName").removeClass("d-none")
}
const chineseInputSuccess =()=>{
  $('#chineseInput').removeClass(" is-invalid")
  $("#validationChineseName").addClass("d-none")
}
const englishInputFailed =()=>{
  $('#englishInput').addClass(" is-invalid")
  $("#validationEnglishName").removeClass("d-none")
}
const englishInputSuccess =()=>{
  $('#englishInput').removeClass(" is-invalid")
  $("#validationEnglishName").addClass("d-none")
}


export default class  Validate{
  constructor(){}
  success= false
  init(){
    $('#chineseInput').on('change',function(){
      let value = $(this).val()
      if(!isEmpty.test(value)){
         chineseInputFailed()
      }else{
        chineseInputSuccess()
      }
    })
    $('#englishInput').on('change',function(){
      let value = $(this).val()
      if(!isEmpty.test(value)){
        englishInputFailed()
      }else{
        englishInputSuccess()
      }
    })
  }
  checkAll(){
    let  isSuccess =true
    if(!$('#chineseInput').val()){
      chineseInputFailed()
      isSuccess =false
    }
    if(!$('#englishInput').val()){
      englishInputFailed()
      isSuccess =false
    }
    return isSuccess
  }
  reset(){
    chineseInputSuccess()
    englishInputSuccess()
  }
}



