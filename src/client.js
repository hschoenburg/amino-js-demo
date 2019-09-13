import axios from "axios"

export default class NameServiceClient {

  constructor(api, address) {
    this.api = api
    this.address = address 
  }


async getMetadata (address) {
  let data = await axios.get("/auth/accounts/" + address)
	return data
}

async PrintStuff(stuff) {
  console.log(stuff)
}

// returns a promise
QueryResolveName(params) {}



QueryWhois(params) {}


BuildMsgBuyName(params) {}

BuildMsgSetName(prams) {}
}



// proof examples
//https://github.com/cosmos/amino-js/blob/master/test/store.test.tsk
//coming soon
//https://github.com/jordansexton/sig

//https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript
//https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910


