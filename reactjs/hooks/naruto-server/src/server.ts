import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

// app.post('/products', multerConfig.single('file'), (req: Request, res: Response) => {
//   res.json({ nejiHyuuga: 'The difference between stupidity and genius, is that genius has its limits.' })
// })

app.listen(3333, () => {
  console.log(`⚡Server running at http://localhost:3333`);
})