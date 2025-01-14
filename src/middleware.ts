import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // URL Rewrites : 透過 request.nextUrl 可以取得下一個要前往的 url，顯示 url 為 /profile ，實際渲染內容為 /hello
  // new URL 接收兩個參數，第一個參數為要解析的 url，第二個參數為 base url，會 return 一個完整的 URL 物件
  if (request.nextUrl.pathname === '/profile') {
    return NextResponse.rewrite(new URL('/hello', request.url));
  }

  // Redirects 的 conditional statement 寫法: 透過 request.nextUrl 可以取得下一個要前往的 url，當 url 為 /profile 時，將使用者重新導向到首頁
  if (request.nextUrl.pathname === '/hello') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 創建一個可進行操作的 response 物件
  const response = NextResponse.next();
  // middleware 會在每個 request 開始時執行，可以在這裡設置操作 cookies 或 headers
  const themePreference = request.cookies.get('theme');
  if (!themePreference) {
    response.cookies.set('theme', 'dark');
  }

  response.headers.set('custom-header', 'custom-value');

  return response;
}

// match config: 當 request 的 url 為 /profile 時，將會執行此 middleware，並將使用者重新導向到首頁
// export function middleware(request: NextRequest) {
//   return NextResponse.rewrite(new URL('/', request.url));
// }

// export const config = {
//   matcher: '/profile',
// };
