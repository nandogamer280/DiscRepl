const app = express();
app.get('/start', (req, res) => {
  res.send('Projeto iniciado');
});

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Servidor iniciado');
});
