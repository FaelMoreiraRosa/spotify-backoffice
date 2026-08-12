"use client";

import { useParams, useSearchParams } from "next/navigation";

export default function Page() {
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const anotherParam = searchParams.get("anotherParam");
  const showTitle = searchParams.get("showTitle");
  return (
    <>
      <h1>Banda id {params.id}</h1>
      <h2>Mode: {mode}</h2>
      <h2>ShowTitle: {showTitle}</h2>
      <h2>anotherParam: {anotherParam}</h2>
    </>
  );
}
