import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    // console.log("req.body", req.body);
    try {
      const db = (await connectDB).db("forum");
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body) });
      // console.log(result['deletedCount']); // { acknowledged: true, deletedCount: 1 } 이런식으로 삭제된걸 알려줌
      if (result["deletedCount"] === 1) {
        res.status(200).json("삭제가 완료되었습니다!");
      }
    } catch (err) {
      res.status(500).json("서버 에러");
    }
  }
}
