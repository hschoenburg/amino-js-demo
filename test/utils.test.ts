import { DecodeTx } from '../src/utils' 

const txData = '1gHwYl3uCkOoo2GaChS536x615s3L5HNHZqLKYPpCK3tiRIUF5FHHqSe5EQ+wA9u2QAy8QEasjAaEQoFdWF0b20SCDExNjU3OTk1EhMKDQoFdWF0b20SBDUwMDAQwJoMGmoKJuta6YchAtQaCqFnshaZQp6rIkvAPyzThvCvXSDO+9AzbxVErqJPEkDWdRwgfQItPT+dDSYFMOtPqQwbbQ1j8+wfs/aBzhulg0YsRiMGZ1Z69dQmi5IT/0D/rRAb1xh6rJN7mQUN4g/FIgoxMTIyNjcyNzU0';

describe('decodeTx', () => {

   it('returns decoded transaction object', () => {
     const decoded = DecodeTx(txData)
     expect(decoded.type).toBe('auth/StdTx')

   })
 })

