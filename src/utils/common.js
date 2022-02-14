/**
 *  模擬api延遲
 *   @param sec
 *   延遲秒數 number
 */
export const  delate = (sec)=>{
  return new Promise((res, rej) => {
    // 函式 sec秒後執行 res 內容
      setTimeout(
        () => {
          res( 
            )
        }, sec)
    })
}