const express = require('express'); 
const Pusher = require("pusher");
const pusher = new Pusher({
  appId: "1793795",
  key: "717320b9053b7beb0830",
  secret: "73cb997e62e48e1ef314",
  cluster: "us2",
  useTLS: true
});
const routes = require('./routes/index');
const app = express(); 
app.use('/', routes);
const PORT = 5000; 

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, App is listening on port "+ PORT);
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 
