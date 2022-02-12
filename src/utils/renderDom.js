
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
      row.append($("<td></td>").html(`<button  type="button" class="btn btn-danger " data-bs-toggle="modal"  data-id="${item.id}"  data-bs-target="#smallDialog">刪除</button>`));
      $(".tableData").append(row);
  });
}


export const  dialogTypeFactor =(id,type)=>{
  const  titleText=(type)=>{
    if(type==="add") return "新增使用者"
  } 
  const btnText=(type)=>{
    if(type==="add") return "新增"
  } 
  $('.dialogTitle').html(titleText(type))
  $('.editedBtn').html(btnText(type))
}

/**
 *  新增表單輸入值
 */

 export const  getFormData=()=>{
  let cnname= $("#chineseInput").val() 
  let enname=$("#englishInput").val() 
  let gender=  $("input[name='genderOptions']:checked").val()
  let phone =   $("#phoneInput").val() 
  let email =   $("#emailInput").val() 
  return{cnname,enname,gender,phone,email}
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