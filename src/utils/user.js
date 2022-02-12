/**
 *  目前選取的使用者
 * @param type
 *          功能 string
 * @uses setUserId 設置目前使用者ID
 * @uses getUserId 獲得目前使用者ID
 */
 export default class User{
  constructor(userId){
    this.userId = userId
  }
  userId=""
  setUserId(userId){
    this.userId=userId
  }
  getUserId(){
      return this.userId
  }
}