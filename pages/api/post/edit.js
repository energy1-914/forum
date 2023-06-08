import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(req, res) {
  if (req.method == "POST") {
    if (req.body.title.length === 0) {
      return res.status(500).json("글제목을 입력해주세요");
    }
    if (req.body.content.length === 0) {
      return res.status(500).json("글내용을 입력해주세요");
    }

    const db = (await connectDB).db("forum");
    await db
      .collection("post")
      .updateOne(
        { _id: new ObjectId(req.body._id) },
        { $set: { title: req.body.title, content: req.body.content } }
      );
    res.redirect(302, "/list");
  }
}
