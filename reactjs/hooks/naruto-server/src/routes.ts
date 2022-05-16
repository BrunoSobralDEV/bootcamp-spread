import { Request, Response, Router } from "express";

import fs from 'fs';
import readline from 'readline';
import * as csv from 'fast-csv';

const router = Router();

const quotes = {
  quote: 'Neji Hyuuga',
  speaker: "The difference between stupidity and genius, is that genius has its limits."
};

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

router.get('/quotes', (req: Request, res: Response) => {
  res.json(quotes)
})

export { router };