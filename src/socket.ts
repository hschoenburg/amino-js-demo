
export function TrySocket() {

const url = 'ws://127.0.0.1:26657/subscribe'
var exampleSocket = new WebSocket(url)

exampleSocket.onopen = function (event) {
  console.log('Connected')
    exampleSocket.send("Here's some text that the server is urgently awaiting!"); 
  };
}
