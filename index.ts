import express, {Request, Response}from 'express';

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Up and running.");
})


app.listen(port, () => console.log("Server is listening at 3000."));