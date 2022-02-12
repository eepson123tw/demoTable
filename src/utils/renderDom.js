
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
      row.append($("<td></td>").html( `<div data-toggle="tooltip" data-placement="top" title="{${item.cnname}}${item.enname}-${sex}"> ${item.cnname}</div>`));
      row.append($("<td></td>").html(item.enname));
      row.append($("<td></td>").html(sex));
      row.append($("<td></td>").html(sex));
      row.append($("<td></td>").html(sex));
      row.append($("<td></td>").html(`<button type="button" class="btn btn-primary modifyBtn"  data-bs-toggle="modal"   data-operate="modify" data-id="${item.id}" data-bs-target="#staticBackdrop">修改</button>`));
      row.append($("<td></td>").html(`<button  type="button" class="btn btn-danger " data-bs-toggle="modal"  data-id="${item.id}"  data-bs-target="#smallDialog">刪除</button>`));
      $(".tableData").append(row);
  });
}




export const  dialogTypeFactor =(id,type)=>{
  const  titleText=(type)=>{
    if(type==="add") return "新增使用者"
  } 
  $('.dialogTitle').html(titleText(type))



  console.log(id,type);
}