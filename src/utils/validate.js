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

const genderInputFailed =()=>{
  $.each($('input[name="genderOptions"]'),function(index,dom){
    dom.classList.add("is-invalid")
  })
}
const genderInputSuccess=()=>{
  $.each($('input[name="genderOptions"]'),function(index,dom){
    dom.classList.remove("is-invalid")
  })
}

const phoneInputFailed =()=>{
  $('#phoneInput').addClass(" is-invalid")
  $("#validationPhone").removeClass("d-none")
}
const phoneInputSuccess =()=>{
  $('#phoneInput').removeClass(" is-invalid")
  $("#validationPhone").addClass("d-none")
}

const emailInputFailed =()=>{
  $('#emailInput').addClass(" is-invalid")
  $("#validationEmail").removeClass("d-none")
}
const emailInputSuccess =()=>{
  $('#emailInput').removeClass(" is-invalid")
  $("#validationEmail").addClass("d-none")
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
    $("input[name='genderOptions']").on('change',function(){
      let value = $(this).val()
      if(!isEmpty.test(value)){
        genderInputFailed()
      }else{
        genderInputSuccess()
      }
    })
    $('#phoneInput').on('change',function(){
      let value = $(this).val()
      if(!isEmpty.test(value)){
        phoneInputFailed()
      }else{
        phoneInputSuccess()
      }
    })
    $('#emailInput').on('change',function(){
      let value = $(this).val()
      if(!isEmpty.test(value)){
        emailInputFailed()
      }else{
        emailInputSuccess()
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
    if(!$("input[name='genderOptions']:checked").val()){
      genderInputFailed()
      isSuccess =false
    }
    if(!$('#phoneInput').val()){
      phoneInputFailed()
      isSuccess =false
    }
    if(!$('#emailInput').val()){
      emailInputFailed()
      isSuccess =false
    }

    if(isSuccess){
      $('.formGroup').addClass("was-validated")
    }
    return isSuccess
  }
  reset(){
    $('.formGroup').removeClass("was-validated")
    chineseInputSuccess()
    englishInputSuccess()
    genderInputSuccess()
    phoneInputSuccess()
    emailInputSuccess()
  }
}



