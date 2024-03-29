import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT;
const app: Application = express();

// app.use(express.json());
app.use(cors({ origin: `http://localhost:${PORT}`  }));
app.use(express.static('./dist/client'));
app.use(express.urlencoded({ extended: false }));	// parse form data
/*
 *app.get('/', (req: Request, res: Response) => {
});
app.get('/signout', (req: Request, res: Response) => {
   res.redirect('/');
});
app.post('/login', (req: Request, res: Response) => {
});
 */

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}...`);
});
