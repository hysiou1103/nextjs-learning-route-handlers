// 新增一個檔案名為 route.ts 的檔案，並 export 一個 function，這個 function 會被當作 route handler 來使用，function name 需要 對應 HTTP method
// route handler 可以像頁面路由一樣，通過資料夾結構進行組織。
export async function GET() {
  // return 的內容會被 render 到網頁上
  return new Response('Hello World');
}
