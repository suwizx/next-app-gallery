import fs from "fs";

export async function GET() {
  const images = await fs.promises.readdir("app/api/images/files");
  return Response.json({images})
}