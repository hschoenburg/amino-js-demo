export function TrySocket() {

  const subscribe = {
       jsonrpc: `2.0`,
       id: 78,
       method: "subscribe", 
       params: {
        "query": "tm.event='NewBlock'"
        }
     }

  const url = 'ws://127.0.0.1:26657/websocket'
  const socket = new WebSocket(url)

  socket.onopen = () => {
    console.log('socket open')

    socket.send(JSON.stringify(subscribe));
  }

  socket.onclose = () => {
    console.log('socket closed')
  }

  socket.onmessage = (e) => {
    console.log(e.data)
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^ Message")
  }

}

