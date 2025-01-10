import { comments } from './data';

// 使用 Thunder Client 這個 extension 來協助測試 API
export async function GET() {
  return Response.json(comments);
}
