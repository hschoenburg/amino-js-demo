import * as sdk from '../lib/types'

// Bank
export function MsgSend (
  senderAddress: sdk.Bech32AccAddress,
  {
    toAddress,
    amounts // [{ denom, amount}]
  }
) {
  return {
    type: `cosmos-sdk/MsgSend`,
    value: {
      from_address: senderAddress: sdk.Bech32AccAddress,
      to_address: toAddress,
      amount: amounts.map(Coin)
    }
  }
}


/*
 * pseudo code
 * example message creator


// Staking
export function MsgDelegate (params: {senderAddress: sdk.Bech32AccAddress, validatorAddress: sdk.Bech32AccAddress, coin: sdk.Coin}) {
  return {
    type: `cosmos-sdk/MsgDelegate`,
    value: {
      delegator_address: params.senderAddress,
      validator_address: params.validatorAddress,
      amount: params.coin,
    }
  }
}

export function MsgUndelegate (
  senderAddress: sdk.Bech32AccAddress,
  {
    validatorAddress,
    amount,
    denom
  }
) {
  return {
    type: `cosmos-sdk/MsgUndelegate`,
    value: {
      validator_address: validatorAddress,
      delegator_address: senderAddress: sdk.Bech32AccAddress,
      amount: Coin({ amount, denom })
    }
  }
}

export function MsgRedelegate (
  senderAddress: sdk.Bech32AccAddress,
  {
    validatorSourceAddress,
    validatorDestinationAddress,
    amount,
    denom
  }
) {
  return {
    type: `cosmos-sdk/MsgBeginRedelegate`,
    value: {
      delegator_address: senderAddress: sdk.Bech32AccAddress,
      validator_src_address: validatorSourceAddress,
      validator_dst_address: validatorDestinationAddress,
      amount: Coin({ amount, denom })
    }
  }
}

// Governance

export function MsgSubmitProposal (
  senderAddress: sdk.Bech32AccAddress,
  {
    proposalType,
    title,
    description,
    initialDeposits // [{ denom, amount }]
  }
) {
  return {
    type: `cosmos-sdk/MsgSubmitProposal`,
    value: {
      content: {
        type: 'cosmos-sdk/TextProposal',
        value: {
          title,
          description
        }
      },
      proposer: senderAddress: sdk.Bech32AccAddress,
      initial_deposit: initialDeposits.map(Coin)
    }
  }
}

export function MsgVote (
  senderAddress: sdk.Bech32AccAddress,
  {
    proposalId,
    option
  }
) {
  return {
    type: `cosmos-sdk/MsgVote`,
    value: {
      voter: senderAddress: sdk.Bech32AccAddress,
      proposal_id: proposalId,
      option
    }
  }
}

export function MsgDeposit (
  senderAddress: sdk.Bech32AccAddress,
  {
    proposalId,
    amounts // [{ denom, amount }]
  }
) {
  return {
    type: `cosmos-sdk/MsgDeposit`,
    value: {
      depositor: senderAddress: sdk.Bech32AccAddress,
      proposal_id: proposalId,
      amount: amounts.map(Coin)
    }
  }
}

export function MsgWithdrawDelegationReward (
  senderAddress: sdk.Bech32AccAddress,
  {
    validatorAddress
  }
) {
  return {
    type: `cosmos-sdk/MsgWithdrawDelegationReward`,
    value: {
      delegator_address: senderAddress: sdk.Bech32AccAddress,
      validator_address: validatorAddress
    }
  }
}

function Coin ({ amount, denom }) {
  return ({
    amount: String(amount),
    denom
  })
}

export default {
  'MsgSend': MsgSend,
  'MsgDelegate': MsgDelegate,
  'MsgUndelegate': MsgUndelegate,
  'MsgRedelegate': MsgRedelegate,
  'MsgSubmitProposal': MsgSubmitProposal,
  'MsgVote': MsgVote,
  'MsgDeposit': MsgDeposit,
  'MsgWithdrawDelegationReward': MsgWithdrawDelegationReward
}
