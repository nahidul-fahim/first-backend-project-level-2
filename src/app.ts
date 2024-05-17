import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express()
// const port = 3000;

// parsers
app.use(express.json())
app.use(cors())

// simple get request
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})


export default app;