import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Location /');
});

app.listen(3333, () => console.log('Server started on port 3333'));
