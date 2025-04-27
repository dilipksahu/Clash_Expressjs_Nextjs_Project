import express, { Application, Request, Response} from 'express';
import "dotenv/config";
import cors from 'cors';

const app: Application = express();
const PORT = process.env.PORT || 7000;

app.get('/', (req: Request, res: Response) => {
    res.send('It works!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// 3:01