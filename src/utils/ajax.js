/**
 *  模擬api之物件
 * @param url
 *    url 呼叫controller的url
 * @param json
 *    datatype 資料傳回格式
 * @uses getData 利用ajax傳回的使用者資料
 * @uses insertUser 利用ajax新增使用者
 * @uses modifyUser 利用ajax修改目前使用者
 * @uses deleteUser 利用ajax刪除目前使用者
 * @uses findUser 利用ajax新增目前使用者
 */


export default class Ajax{
  constructor(url,json){
    this.url =url
    this.json = json
  }
  url =""
  json =""
  userData = [
    {"id":'1',"s_sn":"35","cnname":"邱小甘","enname":"Peter","sex":"0","phone":"0928299800","email":"aaaa@gmail.ocm"}
    ,{"id":'2',"s_sn":"49","cnname":"蔡凡昕","enname":"Allen","sex":"0","phone":"0928299800","email":"aaaa@gmail.ocm"}
    ,{"id":'3',"s_sn":"10","cnname":"test","enname":"Amber","sex":"1","phone":"0928299800","email":"aaaa@gmail.ocm"}
  ] 
 
 getData(){
    return this.userData
  }
  insertUser(user){
    let  data = {...user,id:this.userData.length+1+''}
    this.userData.push(data)
  }
  modifyUser(id,data){
    let  targetId = this.userData.findIndex((user)=>user.id===id)
    let target = this.userData.find((user)=>user.id===id)
    this.userData[targetId]={...target,...data}
  }
  deleteUser(id){
    let  targetIndex = this.userData.findIndex((user)=>user.id===id)
    this.userData.splice(targetIndex,1)
  }
  findUser({cnname,enname,sex,phone,email}){
    let target =  this.userData.find((user)=>user.cnname===cnname&&user.enname===enname&&user.sex===sex&&user.phone===phone&&user.email===email)
    if(target<0 || !target) return null
    return [target]
  }

}