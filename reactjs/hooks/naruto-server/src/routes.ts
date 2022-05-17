import { Request, Response, Router } from "express";

import * as fs from 'fs';
import csv = require('csv-parser');

const router = Router();


router.get('/', (req: Request, res: Response) => {
  // function getRandomInt(min: any, max: any) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }
  
  // let indiceQuoteRandom = getRandomInt(0, 3);
  // // console.log(indiceQuoteRandom)

  // const readable = fs.createReadStream("./produtos.csv")
  // .pipe(csv.parse())
  // .on("error", (error: any) => console.log("read finished"))
  // .on("data", (data: any) => res.json(
  //   data[indiceQuoteRandom]
  // ));

})

router.get('/quotes', (req: Request, res: Response) => {

  function getRandomInt(min: any, max: any) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  const results: any = [];
  
  fs.createReadStream('./finalQuotes.csv')
  .pipe(csv({}))
  .on('data', (data: any) => results.push(data))
  .on('end', () => {
    res.json(results[getRandomInt(1,503)]);
  });
})

export { router };