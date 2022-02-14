/**
 *  使用者目前選擇操作功能
 * @param type string
 *        操作功能 
 * @uses setType 設置目前使用者功能
 * @uses getType 獲得目前使用者功能
 */
export default class Type{
  constructor(type){
    this.type = type
  }
  type=""
  setType(type){
    this.type=type
  }
  getType(){
      return this.type
  }
}