import { comments } from './data';

// 使用 Thunder Client 這個 extension 來協助測試 API
export async function GET() {
  // Response.json() 是 Next.js 封裝好的方法，用來快速返回 JSON 格式的回應，
  // 他將自動設置 Content-Type: application/json 標頭、狀態碼為 200 、並將 Response 自動序列化為 JSON 格式
  return Response.json(comments);
}

// 使用 Thunder Client 這個 extension 來協助測試 API，可以先打 GET 請求，再打 POST 請求，最後再打 GET 請求，就可以看到新增的評論
export async function POST(request: Request) {
  // 從請求中提取 JSON 主體
  const comment = await request.json();

  // 創建新的評論物件
  const newcomment = {
    id: comments.length + 1,
    text: comment.text,
  };

  // 將新評論加入 comments 陣列
  comments.push(newcomment);

  // 回應新增的評論，並設定狀態碼為 201
  return new Response(JSON.stringify(newcomment), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  });
}
