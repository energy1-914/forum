export default function Write() {
  return (
    <div>
      <h4>글 작성 페이지</h4>
      <form action="/api/test" method="POST">
        <button type="submit">제출하기</button>
      </form>
    </div>
  )
}