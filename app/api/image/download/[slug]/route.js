import fs from "fs";

export async function GET(req,{params}) {
  console.log(params);
  const name = await params.slug
  await console.log(name);


//   use header to make user download
  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename="image.png"');
  headers.append('Content-Type', 'image/png');

  const images = await fs.promises.readFile(`app/api/images/files/${name}`);
  return new Response(images,{headers})
}