

import 'bootstrap';
import '@/scss/all.scss';
import {Ajax} from '@/utils/ajax'
import Type from '@/utils/type'
import {refreshTable,dialogTypeFactor,renewFormInput,getFormData} from '@/utils/renderDom'

$(document).ready(function () { 
$('body').css('background','#F6F8FA')
const url = "demo/user";
const ajax = new Ajax(url, 'json');
let type = new Type("") //執行動作type  新刪修查

//實例初始化
let  userData =ajax.getData()
refreshTable(userData)

//新增使用者及改變dialog 文字 顏色
$('.addBtn').on("click",function(){
  renewFormInput()
   type.setType(this.dataset.operate);
  dialogTypeFactor('',type.getType())
})


$('.editedBtn').click(()=>{
  //新增使用者
  if(type.getType()==="add"){
    let newUser
    $('.resetBtn').click()
    newUser= getFormData()
    ajax.insertUser(newUser)
    userData =ajax.getData()
    refreshTable(userData)
  }
})

  













//關閉視窗
$('.cancelBtn').click(()=>{
  $('.resetBtn').click()
})

//重新填寫
$('.reNewBtn').click(()=>{
  renewFormInput()
})




  // $('#smallDialog').modal('show')
  // $('.table').click(function(){
  //   console.log('123123');
  // })


});

