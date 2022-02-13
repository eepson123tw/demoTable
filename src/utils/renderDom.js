
/**
 *  更新table Dom元素
 * @param data
 *          data api的回傳使用者資訊
 */
export const   refreshTable=(data) =>{

  $(".tableData > tr").remove();
  
  $.each(data, function (key, item) {

      const sex = item.sex ==="0" ? '男':'女'
      let row = $("<tr></tr>");
      //  {中文名子} {英文名子}-{性別}
      row.append($("<td></td>").html( `<div data-toggle="tooltip" data-placement="top" title="{${item.cnname}}{${item.enname}}-{${sex}}"> ${item.cnname}</div>`));
      row.append($("<td></td>").html(item.enname));
      row.append($("<td></td>").html(sex));
      row.append($("<td></td>").html(item.phone));
      row.append($("<td></td>").html(item.email));
      row.append($("<td></td>").html(`<button type="button" class="btn btn-primary modifyBtn"  data-bs-toggle="modal"   data-operate="modify" data-id="${item.id}" data-bs-target="#staticBackdrop">修改</button>`));
      row.append($("<td></td>").html(`<button  type="button" class="btn btn-danger deleteBtn" data-bs-toggle="modal"  data-operate="delete"  data-id="${item.id}"  data-bs-target="#smallDialog">刪除</button>`));
      $(".tableData").append(row);
  });
}

/**
 *  輸入表單user資料
 */
export const insertFormInput=(data,curId)=>{

  let user = data.find((user)=>user.id === curId)
  const {cnname,email,enname,id,phone,sex} =user
  $("#chineseInput").val(cnname) 
  $("#englishInput").val(enname) 
  $.each($('input[name="genderOptions"]'),function(index,dom){
    if(dom.value===sex){
      dom.checked= true
    }
  })
  $("#phoneInput").val(phone) 
  $('#emailInput').val(email) 
}



/**
 *  變更dialog文字及顏色
 */
export const  dialogTypeFactor =(type,id)=>{
  const  titleText=(type)=>{
    if(type==="add") return "新增使用者"
    if(type==="modify") return "修改使用者"
    if(type==="search") return "搜尋使用者"
  } 
  const btnText=(type)=>{
    if(type==="add") return "新增"
    if(type==="modify") return "修改"
    if(type==="search") return "搜尋"
  } 

  const titleClass=(type)=>{
    if(type==="add") return "modal-header text-white bg-success content-modal"
    if(type==="modify") return "modal-header  text-white bg-primary  content-modal"
    if(type==="search") return "modal-header   text-white bg-orange-500 content-modal"
  } 
  const btnClass=(type)=>{
    if(type==="add") return "editedBtn btn btn-success"
    if(type==="modify") return "editedBtn btn btn-primary"
    if(type==="search") return "editedBtn btn text-white  btn-orange "
  } 
  
  $('.content-modal').removeClass().addClass(titleClass(type))
  $('.content-modal-title').html(titleText(type))
  $('.editedBtn').removeClass().addClass(btnClass(type))
  $('.editedBtn').html(btnText(type))
}

/**
 *  提取表單輸入值
 */
 export const  getFormData=()=>{
  let cnname= $("#chineseInput").val() 
  let enname=$("#englishInput").val() 
  let sex=  $("input[name='genderOptions']:checked").val()
  let phone =   $("#phoneInput").val() 
  let email =   $("#emailInput").val() 
  return{cnname,enname,sex,phone,email}
}

/**
 *  清除表單輸入值
 */
export const  renewFormInput=()=>{
  $("#chineseInput").val("") 
  $("#englishInput").val("") 
    $.each($('input[name="genderOptions"]'),function(index,dom){
      dom.checked=false
    })
  $("#phoneInput").val("") 
  $('#emailInput').val("") 
}