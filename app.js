var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8000);

function handler (req, res) {
  fs.readFile(__dirname + '/build/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

const scores = {};

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('click', function(data){
    const {id} = data;
    if(!scores[id]){
      scores[id] = 0
    } 
    scores[id] += 1;

    console.log(scores)

    socket.emit('freestyle-state',
      {
        score: scores[id]
      }
    );
  });
});