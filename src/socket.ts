export function TrySocket() {

const url = 'ws://127.0.0.1:26657/websocket'
const socket = new WebSocket(url)

socket.onopen = () => {
  console.log('socket open')
}

socket.onclose = () => {
  console.log('socket closed')
}

socket.onmessage = (e) => {
console.log(e.data)
console.log("^^^^^^^^^^^^^^^^^^^^^^^^^ Message")
}

const subscribe = {
     jsonrpc: `2.0`,
     id: 78,
     method: "subscribe", 
     params: {
			"query": "tm.event='NewBlock'"
			}
   }
socket.send(JSON.stringify(subscribe));
}

