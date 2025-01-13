import { comments } from '../data';
import { redirect } from 'next/navigation';

// 資料夾名稱中使用方括號 [ ] 來定義動態部分
// 第二個參數為 context，從裡面解構出 params 物件，該物件內包含動態路由的參數，這是一種常見的開發慣例，並且可以避免 ESLint 報錯，ex: _request
export async function GET(
  // 弟一個參數 request 因用不到，使用前綴底線 _ 來表示忽略
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  // 當輸入 url /comments/4時，就會重新導向到 /comments，從 network 觀察會發現狀態碼為 307
  if (parseInt(params?.id) > comments.length) {
    return redirect('/comments');
  }

  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const { id } = await params;

  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[index].text = text; // 更新評論
  return Response.json(comments[index]); // return updated comments
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  const delectedComment = comments[index];
  comments.splice(index, 1); // 刪除評論
  return Response.json(delectedComment); // return deleted comment
}
