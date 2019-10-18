import axios from 'axios'
import * as sdk from '../lib/types'
import { DecodeTx }  from './utils'
import { TrySocket } from './socket'
import * as handlers from './handlers'

/*
 * ok lets spec out this app. It should work for nameservice
 * Create a Wallet
 * Query Your Wallet Balance
 * Receive coins to this account
 e Buy a name -> with proof

 *
 * Query your names
 * Update Your name
 * Send coins to address
 */


// import {encodeString, decodeString } from '@tendermint/amino-js'
// import { marshalTx, unmarshalTx } from '@tendermint/amino-js';

// placeholder var for local wallet


window.onload = function() {
    handlers.RegisterFormListeners()

  //TrySocket()
}

