import express from 'express';
import routes from './routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import connection from './utility/dbConnection.js';

connection();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});