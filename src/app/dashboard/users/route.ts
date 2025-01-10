// route handler 可以被嵌套，就像 page route 一樣
export async function GET() {
  return new Response('User data');
}
