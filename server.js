import express from 'express';
import path from 'path';

const app = express();
const dist = path.resolve('dist');
const port = Number(process.env.PORT) || 3000;

app.use(express.static(dist));

app.use((_req, res) => {
  res.sendFile(path.join(dist, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
