// app/ProductList.tsx
"use cache"; // ✅ Cache Components
import React from "react";
import { cacheTag } from "next/cache";
import { db } from "./product";

export default async function ProductList() {
  cacheTag("products"); // ✅ doğru etiket (updateTag ile birebir)
  return <ul>{db.products.map((p: string, i: number) => <li key={i}>{p}</li>)}</ul>;
}
