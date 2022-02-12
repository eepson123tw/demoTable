/**
 *  使用者目前選擇功能
 * @param type
 *          功能 string
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