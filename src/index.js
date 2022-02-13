

import 'bootstrap';
import '@/scss/all.scss';
import Ajax from '@/utils/ajax'
import Type from '@/utils/type'
import Validate from '@/utils/validate'
import User from '@/utils/user'
import {refreshTable,refreshTableByNoUser,animateTransForm,dialogTypeFactor,insertFormInput,renewFormInput,getFormData} from '@/utils/renderDom'
import {delate} from '@/utils/common'
$(document).ready(function () { 
  $('body').css('background','#F6F8FA')
  const url = "demo/user";
  const ajax = new Ajax(url, 'json');
  let type = new Type("") 
  let validate = new Validate()
  let user = new User()

  //驗證初始化 及表單重製
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
//搜尋使用者
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

//確認鍵點擊
  $('.editedBtn').click(()=>{
    let isValidate=  validate.checkAll()
      //確認新增使用者
      if(type.getType()==="add" && isValidate){
        animateTransForm()
        $('.resetBtn').click()
        delate(1000).then((res)=>{
          let  newUser= getFormData()
          ajax.insertUser(newUser)
          userData =ajax.getData()
          refreshTable(userData)
          modifyFn()
          deleteFn()
        })
       
      }
      //確認修改使用者
      if(type.getType()==="modify" && isValidate){
        animateTransForm()
        $('.resetBtn').click()
        delate(1000).then((res)=>{
          let  newUser= getFormData()
          ajax.modifyUser(user.getUserId(),newUser)
          userData =ajax.getData()
          refreshTable(userData)
          modifyFn()
          deleteFn()
        })
      }
     //搜尋修改使用者
      if(type.getType()==="search" && isValidate){
        animateTransForm()
        $('.resetBtn').click()
        delate(500).then((res)=>{
          let  newUser= getFormData()
          userData= ajax.findUser(newUser)
          if(!userData){
            refreshTableByNoUser("查無使用者")
            return
          }
          refreshTable(userData)
          modifyFn()
          deleteFn()
        })
      }
    })

    //確認刪除使用者
    $('.btnSmallDailogConfirm').on("click",function(){
        let id = user.getUserId()
        ajax.deleteUser(id)
        userData =ajax.getData()
        refreshTable(userData)
           //若已無使用者
        if(!userData.length){
          $('.btnSmallDailogCancel2').click()
          refreshTableByNoUser("表單中已無使用者，請新增使用者!")
        }
        $('.deleteBtn').click()
    })

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

