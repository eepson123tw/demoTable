

import 'bootstrap';
import '@/scss/all.scss';
import Ajax from '@/utils/ajax'
import Type from '@/utils/type'
import Validate from '@/utils/validate'
import User from '@/utils/user'
import {refreshTable,dialogTypeFactor,insertFormInput,renewFormInput,getFormData} from '@/utils/renderDom'

$(document).ready(function () { 
  $('body').css('background','#F6F8FA')
  const url = "demo/user";
  const ajax = new Ajax(url, 'json');
  let type = new Type("") //執行動作type  新刪修查
  let validate = new Validate()
  let user = new User()

  const  resetFn=()=>{
    validate.reset()
    renewFormInput()
    validate.init()
  }


  //實例初始化
  let  userData =ajax.getData()
  refreshTable(userData)
  modifyFn()
  deleteFn()
  //新增使用者
  $('.addBtn').on("click",function(){
    resetFn()
    type.setType(this.dataset.operate);
    dialogTypeFactor(type.getType())
  })

    
//todo搜尋功能

$(".searchBtn").on("click",function(){
  resetFn()
  type.setType(this.dataset.operate);
  dialogTypeFactor(type.getType())
})



  //修改使用者
  function modifyFn(){
    $('.modifyBtn').on("click",function(){
      validate.reset()
      validate.init()
      let id = this.dataset.id
      let  userData =ajax.getData()
      user.setUserId(id)
      type.setType(this.dataset.operate);
      dialogTypeFactor(type.getType())
      insertFormInput(userData,id)
    })

  }

//刪除使用者
  function deleteFn(){
    $('.deleteBtn').on("click",function(){
      let id = this.dataset.id
      user.setUserId(id)
    })
  }




//todo 跑條效果
  $('.editedBtn').click(()=>{
    let isValidate=  validate.checkAll()
      //新增使用者
      if(type.getType()==="add" && isValidate){
        $('.resetBtn').click()
          let  newUser= getFormData()
          ajax.insertUser(newUser)
          userData =ajax.getData()
          refreshTable(userData)
          modifyFn()
          deleteFn()
      }
      //修改使用者
      if(type.getType()==="modify" && isValidate){
        $('.resetBtn').click()
        let  newUser= getFormData()
        ajax.modifyUser(user.getUserId(),newUser)
        userData =ajax.getData()
        refreshTable(userData)
        modifyFn()
        deleteFn()
      }
    })





    $('.btnSmallDailogConfirm').on("click",function(){
      let id = user.getUserId()
      ajax.deleteUser(id)
      userData =ajax.getData()
      refreshTable(userData)
      //若已無使用者
      if(!userData.length){
        $('.btnSmallDailogCancel2').click()
      }
      $('.deleteBtn').click()
    })





//todo 表單驗證 




















  //關閉視窗
  $('.cancelBtn').click(()=>{
    $('.resetBtn').click()
  })
  $('.btnSmallDailogCancel').click(()=>{
    $('.deleteBtn').click()
  })



  //重新填寫
  $('.reNewBtn').click(()=>{
    renewFormInput()
    validate.reset()
  })


});

