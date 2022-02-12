

import 'bootstrap';
import '@/scss/all.scss';
import {Ajax} from '@/utils/ajax'
import {refreshTable,dialogTypeFactor} from '@/utils/renderDom'

$(document).ready(function () { 
$('body').css('background','#F6F8FA')
const url = "demo/user";
const res = new Ajax(url, 'json');


//實例初始化
let  userData =res.getData()
refreshTable(userData)


//新增使用者
$('.addBtn').click(function(){
  let type =this.dataset.operate;
  dialogTypeFactor('',type)
})


//關閉視窗
$('.cancelBtn').click(()=>{
  $('.resetBtn').click()
})

// $('.modifyBtn').click(function(){
//   let id =
//   console.log(this.dataset.id);
// })


  // $(window).on('load', function(){ 
  
// $('.wow').click()
// });

  // $('#smallDialog').modal('show')
  // $('.table').click(function(){
  //   console.log('123123');
  // })


});

