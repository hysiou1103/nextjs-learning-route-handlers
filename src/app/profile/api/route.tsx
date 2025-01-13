import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestHeader = request.headers; // 取得 request 的 headers
  console.log(requestHeader.get('Authorization')); // 取得 header 中 Authorization 的值

  return new Response('<h1>Profile API data</h1>', {
    headers: { 'Content-Type': 'text/html' }, // 設置 response header
  });
}
