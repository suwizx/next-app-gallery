import fs from "fs";

export async function GET(req,{params}) {
  const name = await params.slug
  const images = await fs.promises.readFile(`app/api/images/files/${name}`);
  return new Response(images)
}