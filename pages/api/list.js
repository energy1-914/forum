import { connectDB } from "@/util/database";

export default async function List(req, res) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  // console.log(result);

  res.status(200).json(result);
}

//유저에게 DB에 있던 게시물들을 뽑아서 보내주는 서버기능