import {EIP712TypedData, MessageTypes} from './models';
import {TypedDataUtils, TypedMessage} from 'eth-sig-util';

// I don't think this part is correct based on the docs: https://github.com/gnosis/zodiac-module-reality#domain
const typedData: EIP712TypedData = {
    primaryType: 'Transaction',
    types: {
        Transaction: [
            { type: 'address', name: 'to' },
            { type: 'uint256', name: 'value' },
            { type: 'bytes', name: 'data' },
            { type: 'uint8', name: 'operation' },
            { type: 'uint256', name: 'nonce' }
        ]
    },
    domain: {
        chainId: 1,
        verifyingContract: '0x1234'
    },
    message: {
        to:'0x60AF6197d08dEa71A22581f13B72018B8C2671A7',
        value:'10000000000000000',
        data:'0x',
        operation:'0',
        nonce:'0',
    },
}

const hashedStructure = TypedDataUtils.hashStruct(
    typedData.primaryType,
    typedData.message,
    typedData.types,
    true
).toString('hex');

const signedDataHash = '0x' + TypedDataUtils.sign(typedData as TypedMessage<MessageTypes>).toString('hex');

console.log('hashedStructure: ', hashedStructure);
console.log('signedDataHash: ', signedDataHash);
