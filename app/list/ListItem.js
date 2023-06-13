"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${result[i]._id}`}>
              <h4>{result[i].title}</h4>
            </Link>
            <button
              onClick={() => {
                fetch("/api/post/delete", {
                  method: "POST",
                  body: result[i]._id,
                })
                  .then(res => res.json())
                  .then(response => alert(response));
              }}
            >
              🗑️
            </button>
          </div>
        );
      })}
    </div>
  );
}
