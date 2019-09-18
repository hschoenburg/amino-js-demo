import * as CosmosTypes from '../lib/types'

/*
 * Wallet,
 * Client
 * NameServiceClient
 */

export type Optional<T> = T | undefined


export interface MsgBuyName extends CosmosTypes.Msg {
 name: string
 bid:   CosmosTypes.Coin
 buyer: string
}
