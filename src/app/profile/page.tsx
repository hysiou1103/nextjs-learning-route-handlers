// 當同個資料夾下同時存在 route handle 及 page.tsx 時兩者會互相衝突，route handle 會被優先執行，而不會執行 page.tsx
// 當希望兩個檔案內容都被執行時，可以將其中一個檔案移動到其他資料夾下
export default function ProfilePage() {
  return <h1>Profile Page</h1>;
}
