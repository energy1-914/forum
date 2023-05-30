export default function Write() {
  return (
    <div className="p-20">
      <h4>글 작성 페이지</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목"/>
        <input name="content" placeholder="글내용"/>
        <button type="submit">제출하기</button>
      </form>
    </div>
  )
}