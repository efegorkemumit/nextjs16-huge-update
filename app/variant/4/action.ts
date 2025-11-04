// app/actions.ts
"use server";
import { updateTag } from "next/cache";
import { db } from "./product";

export async function addProduct(name: string) {
  db.products.push(name || `Item-${Date.now()}`);
  updateTag("products");        // ✅ tag
}
