"use client";

import { useEffect, useState } from "react";
import Editor from "./Editor";

export default function GitHubCodePage() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);

  const GITHUB_RAW_URL =
    "https://raw.githubusercontent.com/SemgaTeam/blog/refs/heads/main/backend/cmd/app/main.go";

  useEffect(() => {
    fetch(GITHUB_RAW_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then((data) => {
        setCode(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setCode("Error");
        setLoading(false);
      });
  }, []);

  if (loading) return <>Loading...</>;

  return (
    <>
      <br />
      <Editor fileName="main.go" language="go" code={code} />
    </>
  );
}
