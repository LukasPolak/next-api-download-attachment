import { NextApiRequest, NextApiResponse } from "next";
import stream from "stream";
import { promisify } from "util";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const url = req?.query?.url as string;
    const name = req?.query?.name as string;
    const pipeline = promisify(stream.pipeline);
    const response = await fetch(url);
    const contentType = response.headers.get("content-type") as string;

    if (!response.ok) {
      res.status(500).json({ message: response.statusText });
      return;
    }

    res.setHeader("Content-Type", contentType);
    res.setHeader("Content-Disposition", `attachment; filename=${name}`);

    // TODO: fix `@ts-ignore` comment
    // @ts-ignore
    await pipeline(response.body, res);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
}
