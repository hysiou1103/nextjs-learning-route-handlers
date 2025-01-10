export async function GET() {
  // return 的內容會被 render 到網頁上
  return new Response('Dashboard data');
}
