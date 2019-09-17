import * as Amino from 'amino-js'

export function DecodeTx(txData: any): any {
  const bytes = Amino.base64ToBytes(txData);
  const value = Amino.unmarshalTx(bytes, true);
  return value
  
}

