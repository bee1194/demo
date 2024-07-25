"use client";
import React, { useEffect, useState } from "react";

import { IPost } from "@/models/post.model";

interface IOwnProp {
  postSlug: string;
}

export default function Detail(props: IOwnProp) {
  const { postSlug } = props;
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    setPost({ title: postSlug, content: "Lorem Ipsum" } as unknown as IPost);
  }, [postSlug]);

  return (
    <div className="text-justify">
      <h1>{post?.title ?? "N/A"}</h1>
      <p>{post?.content ?? "N/A"}</p>
    </div>
  );
}
