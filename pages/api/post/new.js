import { connectDB } from "@/util/database";

export default async function handler(request, response) {
  if (request.method == "POST") {
    if (request.body.title.length === 0) {
      return response.status(500).json("글제목을 입력해주세요");
    }
    if (request.body.content.length === 0) {
      return response.status(500).json("글내용을 입력해주세요");
    }
    // console.log(request.body.title.length);
    const db = (await connectDB).db("forum");
    await db.collection("post").insertOne(request.body);
    response.redirect(302, "/list");
  }
}
