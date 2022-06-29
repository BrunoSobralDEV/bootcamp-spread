import { config } from "../config/Constants";
import { URLModel } from "../database/model/URL";
import { Request, Response } from "express";
import shortId from 'shortid';

export class URLController {

  public async shorten (req: Request, res: Response): Promise<void> {
    // 1- Check the URL exists
    const { originURL } = req.body;
    const url = await URLModel.findOne({ originURL });
    if (url) {
      res.json(url)
      return
    }

    // 2- next, Create hash to generate URL
    const hash = shortId.generate();
      // mount destination url
    const shortURL = `${config.API_URL}/${hash}`

    // 3- Save URL in the database
    const newURL = URLModel.create({ hash, shortURL, originURL });
    
    // 4- Return URL that was saved
    res.json(newURL);
  }

  public async redirect (req: Request, res: Response): Promise<void> {
    // 1- Get hash url
    const { hash } = req.params;
    
    // 2- Find original URL according to hash
    const url = await URLModel.findOne({ hash });
    if (url) {
      // 3- Redirect to url we found in the database
      res.redirect(url.originURL);
      return
    }

    res.status(400).json({ error: 'URL not found'})
  }
}