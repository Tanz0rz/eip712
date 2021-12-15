import { _TypedDataEncoder } from '@ethersproject/hash';

const tx = {
    to: "0x1111111254fb6c44bac0bed2854e76f90643097d",
    value: "1000000000000000000",
    data: "0x",
    operation: "0",
    nonce: "0"
};

const EIP712_TYPES = {
    Transaction: [
        {
            name: 'to',
            type: 'address'
        },
        {
            name: 'value',
            type: 'uint256'
        },
        {
            name: 'data',
            type: 'bytes'
        },
        {
            name: 'operation',
            type: 'uint8'
        },
        {
            name: 'nonce',
            type: 'uint256'
        }
    ]
};

const domain = {
    chainId: 4,
    verifyingContract: '0xe97253Ad60F66f7B359615FF7aB7Ecd9CD37fE1C'
};

const hashedStructure = _TypedDataEncoder.hash(domain, EIP712_TYPES, tx)

console.log('hashedStructure: ', hashedStructure);
// https://snapshot.org/#/bitdecay.eth/proposal/0x8e4963330cbc3377729231f9ff8d6ead8a6dfb10e520786a31ae4ae68412cd8b
