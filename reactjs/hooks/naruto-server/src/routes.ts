import { Request, Response, Router } from "express";

import fs from 'fs';
import readline from 'readline';
import * as csv from 'fast-csv';

const router = Router();



router.get('/', (req: Request, res: Response) => {
  const readable = fs.createReadStream("./produtos.csv")
  .pipe(csv.parse())
  .on("error", (error: any) => console.log("read finished"))
  .on("data", (data: any) => res.send(
    data
  ));

  // const streamCsv = csv().on('data', (data: any) => console.log(data))
  // readable.pipe(streamCsv.parse())
  
})

export { router };