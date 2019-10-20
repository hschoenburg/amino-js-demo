# ToDo


1. Add form for submitting Mnemonic to instantiate wallet.

2. insert client.QueryAccount into Cosmos.SendMessage

3. sig.signTx and sig.Verify(tx)

4. BroadcasTx, verifyTxInclusion

5. RPC TrySocket (tendermin-js) ?




Can I encode the Tx to skip a round trip step?




# RPC
and nomic-io/tendermint-js
FIrefox WebSocket inpsector
https://hacks.mozilla.org/2019/10/firefoxs-new-websocket-inspector/
possibly incorporate https://github.com/nomic-io/js-tendermint




# The 5 libs

sig - crypto features
types - SDK, Tendermint, RPC, REST JSON structs --- extensible with typegen?
cosmos-api - client lib for sending Txs, etc to your SDK app
demo-app - shows how to use client lib

tendermint-js -- incorporate into cosmos-api?


- decode and verify tx proof
- Msg proof?


How to handle secrets in the browser?
git@github.com:handshake-org/faucet-tool.git

Missing WhoIs type
