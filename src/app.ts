import express from 'express';

const app = express();

const port = process.env.PORT || 3000;
const env = app.get('env');

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => {
  console.log(`⚡️ The server is now running at http://localhost:${port} in ${env} mode.`);
  console.log('⚡️ Press CTRL-C to stop.\n');
});

export default app;
