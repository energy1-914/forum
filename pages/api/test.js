export default function handler(request, response) {
  if (request.method == "POST") {
    response.status(200).json("글 작성이 완료되었습니다.");
  }
}
