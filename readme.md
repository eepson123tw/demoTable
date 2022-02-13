# 考題 DEMO

- 環境：將資料夾放到網頁伺服器中，用瀏覽器執行 http://網址/demo/index.html
- 需求:

1. 美化它
2. 拿掉 jQuery UI，只能用 bootstrap,jQuery，所以 Dialog 要自己實現
3. 刪除鍵補上確認 Dialog
4. Dialog 彈出需加上遮罩層，當 add,search,edit 完畢後才移除遮罩層
5. 滑鼠移到列上時，整列變色
6. 滑鼠移到人名上面時，顯示 tooltip text 說明文字，內容格式： {中文名子} {英文名子}-{性別}
7. 加二個欄位: 手機,電子信箱
8. 欄位驗証
9. 提高 JS 檔物件化程度    10.實作 ajax
### 資料夾結構
---
```
├─ depoly.sh  //推送gitPage 指令
├─ package-lock.json
├─ package.json
├─ postcss.config.js //瀏覽器優化
├─ readme.md  
├─ src
│  ├─ assets //靜態檔
│  │  └─ img
│  │     └─ favicon.ico 
│  ├─ index.js
│  ├─ scss
│  │  └─ all.scss //引入bootStrap 
│  ├─ template
│  │  └─ template.html //模板html
│  └─ utils
│     ├─ ajax.js  //模擬api物件
│     ├─ common.js  //延遲邏輯
│     ├─ renderDom.js  //渲染DOM邏輯
│     ├─ type.js       //使用者點選功能物件
│     ├─ user.js       //使用者物件
│     └─ validate.js //表單驗證邏輯
└─ webpack.config.js webpack設定檔
```