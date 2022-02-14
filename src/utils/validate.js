const  isEmpty = /\S/;
/**
 *  驗證中文名稱 成功
 */
const chineseInputFailed =()=>{
  $('#chineseInput').addClass(" is-invalid")
  $("#validationChineseName").removeClass("d-none")
}
/**
 *  驗證中文名稱 失敗
 */
const chineseInputSuccess =()=>{
  $('#chineseInput').removeClass(" is-invalid")
  $("#validationChineseName").addClass("d-none")
}
/**
 *  驗證英文名稱 失敗
 */
const englishInputFailed =()=>{
  $('#englishInput').addClass(" is-invalid")
  $("#validationEnglishName").removeClass("d-none")
}
/**
 *  驗證英文名稱 成功
 */
const englishInputSuccess =()=>{
  $('#englishInput').removeClass(" is-invalid")
  $("#validationEnglishName").addClass("d-none")
}
/**
 *  驗證性別 失敗
 */
const genderInputFailed =()=>{
  $.each($('input[name="genderOptions"]'),function(index,dom){
    dom.classList.add("is-invalid")
  })
}
/**
 *  驗證性別 成功
 */
const genderInputSuccess=()=>{
  $.each($('input[name="genderOptions"]'),function(index,dom){
    dom.classList.remove("is-invalid")
  })
}
/**
 *  驗證電話 成功
 */
const phoneInputFailed =()=>{
  $('#phoneInput').addClass(" is-invalid")
  $("#validationPhone").removeClass("d-none")
}
/**
 *  驗證電話 成功
 */
const phoneInputSuccess =()=>{
  $('#phoneInput').removeClass(" is-invalid")
  $("#validationPhone").addClass("d-none")
}
/**
 *  驗證信箱 失敗
 */
const emailInputFailed =()=>{
  $('#emailInput').addClass(" is-invalid")
  $("#validationEmail").removeClass("d-none")
}
/**
 *  驗證信箱 成功
 */
const emailInputSuccess =()=>{
  $('#emailInput').removeClass(" is-invalid")
  $("#validationEmail").addClass("d-none")
}

/**
 *  驗證邏輯及獲取表單dom
 */

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



