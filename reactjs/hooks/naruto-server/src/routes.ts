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
  function getRandomInt(min: any, max: any) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  let indiceQuoteRandom = getRandomInt(0, 3);
  console.log(indiceQuoteRandom)

  const readable = fs.createReadStream("./produtos.csv")
  .pipe(csv.parse())
  .on("error", (error: any) => console.log("read finished"))
  .on("data", (data: any) => res.json(
    data[indiceQuoteRandom]
  ));

})

router.get('/quotes', (req: Request, res: Response) => {
  res.json(quotes)
})

router.get('/test', (req: Request, res: Response) => {
})

export { router };