import express, { Request, Response, Router } from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';

const app = express();

const server = http.createServer(app)
const io = new Server(server)

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const message = []

io.on('connection', (socket) => {
  console.log('a user connected', socket.id)

  socket.on('sendMessage', (data) => {
    message.push(data)
  })
})

app.listen(3000, () => 'server running on port 3000')
