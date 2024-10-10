import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// wire up middleware
app.use(express.json());

// bind routes


app.get('/', (req, res) => {
  res.send('Heyoh');
});

// init log
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});