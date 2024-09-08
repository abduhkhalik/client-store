import { Category } from "@/types";

const URL = `${process.env.PUBLIC_API_URL}/categories`;

async function getCategories(): Promise<Category[]> {
  const res = await fetch(URL);
  return res.json();
}

export default getCategories;
